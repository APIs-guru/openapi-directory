import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSpotFleetRequestHistoryActionEnum {
    DescribeSpotFleetRequestHistory = "DescribeSpotFleetRequestHistory"
}
export declare enum PostDescribeSpotFleetRequestHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSpotFleetRequestHistoryQueryParams extends SpeakeasyBase {
    action: PostDescribeSpotFleetRequestHistoryActionEnum;
    version: PostDescribeSpotFleetRequestHistoryVersionEnum;
}
export declare class PostDescribeSpotFleetRequestHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSpotFleetRequestHistoryRequest extends SpeakeasyBase {
    queryParams: PostDescribeSpotFleetRequestHistoryQueryParams;
    headers: PostDescribeSpotFleetRequestHistoryHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
