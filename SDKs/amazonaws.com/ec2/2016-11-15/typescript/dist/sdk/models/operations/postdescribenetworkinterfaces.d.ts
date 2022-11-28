import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeNetworkInterfacesActionEnum {
    DescribeNetworkInterfaces = "DescribeNetworkInterfaces"
}
export declare enum PostDescribeNetworkInterfacesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeNetworkInterfacesQueryParams extends SpeakeasyBase {
    action: PostDescribeNetworkInterfacesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeNetworkInterfacesVersionEnum;
}
export declare class PostDescribeNetworkInterfacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeNetworkInterfacesRequest extends SpeakeasyBase {
    queryParams: PostDescribeNetworkInterfacesQueryParams;
    headers: PostDescribeNetworkInterfacesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeNetworkInterfacesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
