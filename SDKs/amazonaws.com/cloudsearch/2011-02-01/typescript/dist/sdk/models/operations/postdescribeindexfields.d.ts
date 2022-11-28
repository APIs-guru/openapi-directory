import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeIndexFieldsActionEnum {
    DescribeIndexFields = "DescribeIndexFields"
}
export declare enum PostDescribeIndexFieldsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDescribeIndexFieldsQueryParams extends SpeakeasyBase {
    action: PostDescribeIndexFieldsActionEnum;
    version: PostDescribeIndexFieldsVersionEnum;
}
export declare class PostDescribeIndexFieldsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeIndexFieldsRequest extends SpeakeasyBase {
    queryParams: PostDescribeIndexFieldsQueryParams;
    headers: PostDescribeIndexFieldsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeIndexFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
