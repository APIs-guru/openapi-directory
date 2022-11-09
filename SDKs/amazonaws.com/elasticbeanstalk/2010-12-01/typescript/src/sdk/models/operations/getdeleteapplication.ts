import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteApplicationActionEnum {
    DeleteApplication = "DeleteApplication"
}

export enum GetDeleteApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteApplicationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteApplicationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TerminateEnvByForce" })
  terminateEnvByForce?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteApplicationVersionEnum;
}


export class GetDeleteApplicationHeaders extends SpeakeasyBase {
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


export class GetDeleteApplicationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteApplicationQueryParams;

  @Metadata()
  headers: GetDeleteApplicationHeaders;
}


export class GetDeleteApplicationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
