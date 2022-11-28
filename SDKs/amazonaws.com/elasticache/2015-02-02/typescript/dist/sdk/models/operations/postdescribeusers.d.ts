import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeUsersActionEnum {
    DescribeUsers = "DescribeUsers"
}
export declare enum PostDescribeUsersVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeUsersQueryParams extends SpeakeasyBase {
    action: PostDescribeUsersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeUsersVersionEnum;
}
export declare class PostDescribeUsersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeUsersRequest extends SpeakeasyBase {
    queryParams: PostDescribeUsersQueryParams;
    headers: PostDescribeUsersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
