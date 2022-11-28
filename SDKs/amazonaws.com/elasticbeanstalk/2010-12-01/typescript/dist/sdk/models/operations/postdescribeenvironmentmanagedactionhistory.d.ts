import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeEnvironmentManagedActionHistoryActionEnum {
    DescribeEnvironmentManagedActionHistory = "DescribeEnvironmentManagedActionHistory"
}
export declare enum PostDescribeEnvironmentManagedActionHistoryVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeEnvironmentManagedActionHistoryQueryParams extends SpeakeasyBase {
    action: PostDescribeEnvironmentManagedActionHistoryActionEnum;
    maxItems?: string;
    nextToken?: string;
    version: PostDescribeEnvironmentManagedActionHistoryVersionEnum;
}
export declare class PostDescribeEnvironmentManagedActionHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEnvironmentManagedActionHistoryRequest extends SpeakeasyBase {
    queryParams: PostDescribeEnvironmentManagedActionHistoryQueryParams;
    headers: PostDescribeEnvironmentManagedActionHistoryHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEnvironmentManagedActionHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
