import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeEnvironmentHealthActionEnum {
    DescribeEnvironmentHealth = "DescribeEnvironmentHealth"
}
export declare enum PostDescribeEnvironmentHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeEnvironmentHealthQueryParams extends SpeakeasyBase {
    action: PostDescribeEnvironmentHealthActionEnum;
    version: PostDescribeEnvironmentHealthVersionEnum;
}
export declare class PostDescribeEnvironmentHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEnvironmentHealthRequest extends SpeakeasyBase {
    queryParams: PostDescribeEnvironmentHealthQueryParams;
    headers: PostDescribeEnvironmentHealthHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEnvironmentHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
