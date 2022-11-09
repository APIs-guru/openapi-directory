import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteWarmPoolActionEnum {
    DeleteWarmPool = "DeleteWarmPool"
}
export declare enum GetDeleteWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDeleteWarmPoolQueryParams extends SpeakeasyBase {
    action: GetDeleteWarmPoolActionEnum;
    autoScalingGroupName: string;
    forceDelete?: boolean;
    version: GetDeleteWarmPoolVersionEnum;
}
export declare class GetDeleteWarmPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteWarmPoolRequest extends SpeakeasyBase {
    queryParams: GetDeleteWarmPoolQueryParams;
    headers: GetDeleteWarmPoolHeaders;
}
export declare class GetDeleteWarmPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
