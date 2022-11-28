import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetSerialConsoleAccessStatusActionEnum {
    GetSerialConsoleAccessStatus = "GetSerialConsoleAccessStatus"
}

export enum GetGetSerialConsoleAccessStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetSerialConsoleAccessStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetSerialConsoleAccessStatusActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetSerialConsoleAccessStatusVersionEnum;
}


export class GetGetSerialConsoleAccessStatusHeaders extends SpeakeasyBase {
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


export class GetGetSerialConsoleAccessStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetSerialConsoleAccessStatusQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetSerialConsoleAccessStatusHeaders;
}


export class GetGetSerialConsoleAccessStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
