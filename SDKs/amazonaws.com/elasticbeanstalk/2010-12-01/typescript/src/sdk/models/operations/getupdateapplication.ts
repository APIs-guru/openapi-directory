import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateApplicationActionEnum {
    UpdateApplication = "UpdateApplication"
}

export enum GetUpdateApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetUpdateApplicationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateApplicationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateApplicationVersionEnum;
}


export class GetUpdateApplicationHeaders extends SpeakeasyBase {
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


export class GetUpdateApplicationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateApplicationQueryParams;

  @Metadata()
  headers: GetUpdateApplicationHeaders;
}


export class GetUpdateApplicationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
