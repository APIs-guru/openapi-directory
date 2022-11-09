import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeAccountAttributesActionEnum {
    DescribeAccountAttributes = "DescribeAccountAttributes"
}
export declare enum PostDescribeAccountAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeAccountAttributesQueryParams extends SpeakeasyBase {
    action: PostDescribeAccountAttributesActionEnum;
    version: PostDescribeAccountAttributesVersionEnum;
}
export declare class PostDescribeAccountAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAccountAttributesRequest extends SpeakeasyBase {
    queryParams: PostDescribeAccountAttributesQueryParams;
    headers: PostDescribeAccountAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAccountAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
