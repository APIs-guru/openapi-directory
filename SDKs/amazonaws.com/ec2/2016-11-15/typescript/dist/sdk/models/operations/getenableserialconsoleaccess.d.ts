import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEnableSerialConsoleAccessActionEnum {
    EnableSerialConsoleAccess = "EnableSerialConsoleAccess"
}
export declare enum GetEnableSerialConsoleAccessVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetEnableSerialConsoleAccessQueryParams extends SpeakeasyBase {
    action: GetEnableSerialConsoleAccessActionEnum;
    dryRun?: boolean;
    version: GetEnableSerialConsoleAccessVersionEnum;
}
export declare class GetEnableSerialConsoleAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableSerialConsoleAccessRequest extends SpeakeasyBase {
    queryParams: GetEnableSerialConsoleAccessQueryParams;
    headers: GetEnableSerialConsoleAccessHeaders;
}
export declare class GetEnableSerialConsoleAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
