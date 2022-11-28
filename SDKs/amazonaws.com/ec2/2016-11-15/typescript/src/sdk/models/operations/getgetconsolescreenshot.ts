import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetConsoleScreenshotActionEnum {
    GetConsoleScreenshot = "GetConsoleScreenshot"
}

export enum GetGetConsoleScreenshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetConsoleScreenshotQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetConsoleScreenshotActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetConsoleScreenshotVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WakeUp" })
  wakeUp?: boolean;
}


export class GetGetConsoleScreenshotHeaders extends SpeakeasyBase {
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


export class GetGetConsoleScreenshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetConsoleScreenshotQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetConsoleScreenshotHeaders;
}


export class GetGetConsoleScreenshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
