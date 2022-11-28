import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSendDiagnosticInterruptActionEnum {
    SendDiagnosticInterrupt = "SendDiagnosticInterrupt"
}
export declare enum GetSendDiagnosticInterruptVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetSendDiagnosticInterruptQueryParams extends SpeakeasyBase {
    action: GetSendDiagnosticInterruptActionEnum;
    dryRun?: boolean;
    instanceId: string;
    version: GetSendDiagnosticInterruptVersionEnum;
}
export declare class GetSendDiagnosticInterruptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSendDiagnosticInterruptRequest extends SpeakeasyBase {
    queryParams: GetSendDiagnosticInterruptQueryParams;
    headers: GetSendDiagnosticInterruptHeaders;
}
export declare class GetSendDiagnosticInterruptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
