import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeLifecycleHookTypesActionEnum {
    DescribeLifecycleHookTypes = "DescribeLifecycleHookTypes"
}
export declare enum GetDescribeLifecycleHookTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeLifecycleHookTypesQueryParams extends SpeakeasyBase {
    action: GetDescribeLifecycleHookTypesActionEnum;
    version: GetDescribeLifecycleHookTypesVersionEnum;
}
export declare class GetDescribeLifecycleHookTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeLifecycleHookTypesRequest extends SpeakeasyBase {
    queryParams: GetDescribeLifecycleHookTypesQueryParams;
    headers: GetDescribeLifecycleHookTypesHeaders;
}
export declare class GetDescribeLifecycleHookTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
