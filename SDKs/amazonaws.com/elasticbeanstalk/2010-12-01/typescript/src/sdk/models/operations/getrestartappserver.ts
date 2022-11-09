import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRestartAppServerActionEnum {
    RestartAppServer = "RestartAppServer"
}

export enum GetRestartAppServerVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetRestartAppServerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestartAppServerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestartAppServerVersionEnum;
}


export class GetRestartAppServerHeaders extends SpeakeasyBase {
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


export class GetRestartAppServerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRestartAppServerQueryParams;

  @Metadata()
  headers: GetRestartAppServerHeaders;
}


export class GetRestartAppServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
