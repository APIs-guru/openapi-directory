import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisableSerialConsoleAccessActionEnum {
    DisableSerialConsoleAccess = "DisableSerialConsoleAccess"
}
export declare enum GetDisableSerialConsoleAccessVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisableSerialConsoleAccessQueryParams extends SpeakeasyBase {
    action: GetDisableSerialConsoleAccessActionEnum;
    dryRun?: boolean;
    version: GetDisableSerialConsoleAccessVersionEnum;
}
export declare class GetDisableSerialConsoleAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableSerialConsoleAccessRequest extends SpeakeasyBase {
    queryParams: GetDisableSerialConsoleAccessQueryParams;
    headers: GetDisableSerialConsoleAccessHeaders;
}
export declare class GetDisableSerialConsoleAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
