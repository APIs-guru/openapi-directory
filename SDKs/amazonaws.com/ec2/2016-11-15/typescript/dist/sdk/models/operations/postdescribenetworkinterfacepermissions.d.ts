import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeNetworkInterfacePermissionsActionEnum {
    DescribeNetworkInterfacePermissions = "DescribeNetworkInterfacePermissions"
}
export declare enum PostDescribeNetworkInterfacePermissionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeNetworkInterfacePermissionsQueryParams extends SpeakeasyBase {
    action: PostDescribeNetworkInterfacePermissionsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeNetworkInterfacePermissionsVersionEnum;
}
export declare class PostDescribeNetworkInterfacePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeNetworkInterfacePermissionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeNetworkInterfacePermissionsQueryParams;
    headers: PostDescribeNetworkInterfacePermissionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeNetworkInterfacePermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
