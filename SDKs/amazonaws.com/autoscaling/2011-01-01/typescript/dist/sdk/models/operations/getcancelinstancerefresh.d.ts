import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCancelInstanceRefreshActionEnum {
    CancelInstanceRefresh = "CancelInstanceRefresh"
}
export declare enum GetCancelInstanceRefreshVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetCancelInstanceRefreshQueryParams extends SpeakeasyBase {
    action: GetCancelInstanceRefreshActionEnum;
    autoScalingGroupName: string;
    version: GetCancelInstanceRefreshVersionEnum;
}
export declare class GetCancelInstanceRefreshHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelInstanceRefreshRequest extends SpeakeasyBase {
    queryParams: GetCancelInstanceRefreshQueryParams;
    headers: GetCancelInstanceRefreshHeaders;
}
export declare class GetCancelInstanceRefreshResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
