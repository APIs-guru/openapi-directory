import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEnvironmentResourcesActionEnum {
    DescribeEnvironmentResources = "DescribeEnvironmentResources"
}
export declare enum GetDescribeEnvironmentResourcesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeEnvironmentResourcesQueryParams extends SpeakeasyBase {
    action: GetDescribeEnvironmentResourcesActionEnum;
    environmentId?: string;
    environmentName?: string;
    version: GetDescribeEnvironmentResourcesVersionEnum;
}
export declare class GetDescribeEnvironmentResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEnvironmentResourcesRequest extends SpeakeasyBase {
    queryParams: GetDescribeEnvironmentResourcesQueryParams;
    headers: GetDescribeEnvironmentResourcesHeaders;
}
export declare class GetDescribeEnvironmentResourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
