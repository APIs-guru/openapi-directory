import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListDomainNamesActionEnum {
    ListDomainNames = "ListDomainNames"
}

export enum GetListDomainNamesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetListDomainNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListDomainNamesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListDomainNamesVersionEnum;
}


export class GetListDomainNamesHeaders extends SpeakeasyBase {
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


export class GetListDomainNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListDomainNamesQueryParams;

  @Metadata()
  headers: GetListDomainNamesHeaders;
}


export class GetListDomainNamesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
