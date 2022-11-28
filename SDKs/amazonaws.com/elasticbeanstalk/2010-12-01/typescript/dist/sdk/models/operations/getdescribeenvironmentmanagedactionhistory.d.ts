import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEnvironmentManagedActionHistoryActionEnum {
    DescribeEnvironmentManagedActionHistory = "DescribeEnvironmentManagedActionHistory"
}
export declare enum GetDescribeEnvironmentManagedActionHistoryVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeEnvironmentManagedActionHistoryQueryParams extends SpeakeasyBase {
    action: GetDescribeEnvironmentManagedActionHistoryActionEnum;
    environmentId?: string;
    environmentName?: string;
    maxItems?: number;
    nextToken?: string;
    version: GetDescribeEnvironmentManagedActionHistoryVersionEnum;
}
export declare class GetDescribeEnvironmentManagedActionHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEnvironmentManagedActionHistoryRequest extends SpeakeasyBase {
    queryParams: GetDescribeEnvironmentManagedActionHistoryQueryParams;
    headers: GetDescribeEnvironmentManagedActionHistoryHeaders;
}
export declare class GetDescribeEnvironmentManagedActionHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
