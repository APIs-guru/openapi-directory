import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateDefaultSearchFieldActionEnum {
    UpdateDefaultSearchField = "UpdateDefaultSearchField"
}

export enum GetUpdateDefaultSearchFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetUpdateDefaultSearchFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateDefaultSearchFieldActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DefaultSearchField" })
  defaultSearchField: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateDefaultSearchFieldVersionEnum;
}


export class GetUpdateDefaultSearchFieldHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetUpdateDefaultSearchFieldRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateDefaultSearchFieldQueryParams;

  @Metadata()
  headers: GetUpdateDefaultSearchFieldHeaders;
}


export class GetUpdateDefaultSearchFieldResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
