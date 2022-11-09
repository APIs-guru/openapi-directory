import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetConsoleScreenshotActionEnum {
    GetConsoleScreenshot = "GetConsoleScreenshot"
}

export enum GetGetConsoleScreenshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetConsoleScreenshotQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetConsoleScreenshotActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetConsoleScreenshotVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=WakeUp" })
  wakeUp?: boolean;
}


export class GetGetConsoleScreenshotHeaders extends SpeakeasyBase {
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


export class GetGetConsoleScreenshotRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetConsoleScreenshotQueryParams;

  @Metadata()
  headers: GetGetConsoleScreenshotHeaders;
}


export class GetGetConsoleScreenshotResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
