import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeAvailabilityOptionsActionEnum {
    DescribeAvailabilityOptions = "DescribeAvailabilityOptions"
}
export declare enum PostDescribeAvailabilityOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDescribeAvailabilityOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeAvailabilityOptionsActionEnum;
    version: PostDescribeAvailabilityOptionsVersionEnum;
}
export declare class PostDescribeAvailabilityOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAvailabilityOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeAvailabilityOptionsQueryParams;
    headers: PostDescribeAvailabilityOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAvailabilityOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
