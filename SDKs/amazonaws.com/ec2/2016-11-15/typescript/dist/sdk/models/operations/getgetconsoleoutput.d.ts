import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetConsoleOutputActionEnum {
    GetConsoleOutput = "GetConsoleOutput"
}
export declare enum GetGetConsoleOutputVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetConsoleOutputQueryParams extends SpeakeasyBase {
    action: GetGetConsoleOutputActionEnum;
    dryRun?: boolean;
    instanceId: string;
    latest?: boolean;
    version: GetGetConsoleOutputVersionEnum;
}
export declare class GetGetConsoleOutputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetConsoleOutputRequest extends SpeakeasyBase {
    queryParams: GetGetConsoleOutputQueryParams;
    headers: GetGetConsoleOutputHeaders;
}
export declare class GetGetConsoleOutputResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
