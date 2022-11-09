import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetSerialConsoleAccessStatusActionEnum {
    GetSerialConsoleAccessStatus = "GetSerialConsoleAccessStatus"
}
export declare enum GetGetSerialConsoleAccessStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetSerialConsoleAccessStatusQueryParams extends SpeakeasyBase {
    action: GetGetSerialConsoleAccessStatusActionEnum;
    dryRun?: boolean;
    version: GetGetSerialConsoleAccessStatusVersionEnum;
}
export declare class GetGetSerialConsoleAccessStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetSerialConsoleAccessStatusRequest extends SpeakeasyBase {
    queryParams: GetGetSerialConsoleAccessStatusQueryParams;
    headers: GetGetSerialConsoleAccessStatusHeaders;
}
export declare class GetGetSerialConsoleAccessStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
