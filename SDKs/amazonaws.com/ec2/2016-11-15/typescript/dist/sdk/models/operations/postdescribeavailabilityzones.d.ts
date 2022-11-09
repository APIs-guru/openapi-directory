import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeAvailabilityZonesActionEnum {
    DescribeAvailabilityZones = "DescribeAvailabilityZones"
}
export declare enum PostDescribeAvailabilityZonesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeAvailabilityZonesQueryParams extends SpeakeasyBase {
    action: PostDescribeAvailabilityZonesActionEnum;
    version: PostDescribeAvailabilityZonesVersionEnum;
}
export declare class PostDescribeAvailabilityZonesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAvailabilityZonesRequest extends SpeakeasyBase {
    queryParams: PostDescribeAvailabilityZonesQueryParams;
    headers: PostDescribeAvailabilityZonesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAvailabilityZonesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
