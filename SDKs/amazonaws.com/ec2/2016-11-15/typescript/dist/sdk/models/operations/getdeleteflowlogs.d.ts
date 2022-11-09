import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteFlowLogsActionEnum {
    DeleteFlowLogs = "DeleteFlowLogs"
}
export declare enum GetDeleteFlowLogsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteFlowLogsQueryParams extends SpeakeasyBase {
    action: GetDeleteFlowLogsActionEnum;
    dryRun?: boolean;
    flowLogId: string[];
    version: GetDeleteFlowLogsVersionEnum;
}
export declare class GetDeleteFlowLogsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteFlowLogsRequest extends SpeakeasyBase {
    queryParams: GetDeleteFlowLogsQueryParams;
    headers: GetDeleteFlowLogsHeaders;
}
export declare class GetDeleteFlowLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
