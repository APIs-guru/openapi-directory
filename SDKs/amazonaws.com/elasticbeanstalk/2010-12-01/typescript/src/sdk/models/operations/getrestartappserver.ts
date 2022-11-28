import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRestartAppServerActionEnum {
    RestartAppServer = "RestartAppServer"
}

export enum GetRestartAppServerVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetRestartAppServerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestartAppServerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestartAppServerVersionEnum;
}


export class GetRestartAppServerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetRestartAppServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRestartAppServerQueryParams;

  @SpeakeasyMetadata()
  headers: GetRestartAppServerHeaders;
}


export class GetRestartAppServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
