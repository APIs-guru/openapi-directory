import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeEnvironmentManagedActionsActionEnum {
    DescribeEnvironmentManagedActions = "DescribeEnvironmentManagedActions"
}
export declare enum PostDescribeEnvironmentManagedActionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeEnvironmentManagedActionsQueryParams extends SpeakeasyBase {
    action: PostDescribeEnvironmentManagedActionsActionEnum;
    version: PostDescribeEnvironmentManagedActionsVersionEnum;
}
export declare class PostDescribeEnvironmentManagedActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEnvironmentManagedActionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeEnvironmentManagedActionsQueryParams;
    headers: PostDescribeEnvironmentManagedActionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEnvironmentManagedActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
