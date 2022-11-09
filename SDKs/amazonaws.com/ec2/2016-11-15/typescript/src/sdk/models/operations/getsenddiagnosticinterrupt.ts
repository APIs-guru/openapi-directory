import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSendDiagnosticInterruptActionEnum {
    SendDiagnosticInterrupt = "SendDiagnosticInterrupt"
}

export enum GetSendDiagnosticInterruptVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetSendDiagnosticInterruptQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSendDiagnosticInterruptActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSendDiagnosticInterruptVersionEnum;
}


export class GetSendDiagnosticInterruptHeaders extends SpeakeasyBase {
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


export class GetSendDiagnosticInterruptRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSendDiagnosticInterruptQueryParams;

  @Metadata()
  headers: GetSendDiagnosticInterruptHeaders;
}


export class GetSendDiagnosticInterruptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
