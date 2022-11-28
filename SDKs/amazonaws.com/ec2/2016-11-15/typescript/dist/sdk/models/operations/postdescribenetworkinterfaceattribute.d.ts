import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeNetworkInterfaceAttributeActionEnum {
    DescribeNetworkInterfaceAttribute = "DescribeNetworkInterfaceAttribute"
}
export declare enum PostDescribeNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
    action: PostDescribeNetworkInterfaceAttributeActionEnum;
    version: PostDescribeNetworkInterfaceAttributeVersionEnum;
}
export declare class PostDescribeNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    queryParams: PostDescribeNetworkInterfaceAttributeQueryParams;
    headers: PostDescribeNetworkInterfaceAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeNetworkInterfaceAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
