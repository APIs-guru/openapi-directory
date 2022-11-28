import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSendDiagnosticInterruptActionEnum {
    SendDiagnosticInterrupt = "SendDiagnosticInterrupt"
}

export enum GetSendDiagnosticInterruptVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetSendDiagnosticInterruptQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSendDiagnosticInterruptActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSendDiagnosticInterruptVersionEnum;
}


export class GetSendDiagnosticInterruptHeaders extends SpeakeasyBase {
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


export class GetSendDiagnosticInterruptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSendDiagnosticInterruptQueryParams;

  @SpeakeasyMetadata()
  headers: GetSendDiagnosticInterruptHeaders;
}


export class GetSendDiagnosticInterruptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
