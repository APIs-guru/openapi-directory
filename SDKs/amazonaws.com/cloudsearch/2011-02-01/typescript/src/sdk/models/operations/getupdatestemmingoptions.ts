import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateStemmingOptionsActionEnum {
    UpdateStemmingOptions = "UpdateStemmingOptions"
}

export enum GetUpdateStemmingOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetUpdateStemmingOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateStemmingOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Stems" })
  stems: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateStemmingOptionsVersionEnum;
}


export class GetUpdateStemmingOptionsHeaders extends SpeakeasyBase {
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


export class GetUpdateStemmingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateStemmingOptionsQueryParams;

  @Metadata()
  headers: GetUpdateStemmingOptionsHeaders;
}


export class GetUpdateStemmingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
