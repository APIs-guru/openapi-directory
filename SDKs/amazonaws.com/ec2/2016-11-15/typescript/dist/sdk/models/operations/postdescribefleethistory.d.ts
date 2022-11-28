import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeFleetHistoryActionEnum {
    DescribeFleetHistory = "DescribeFleetHistory"
}
export declare enum PostDescribeFleetHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeFleetHistoryQueryParams extends SpeakeasyBase {
    action: PostDescribeFleetHistoryActionEnum;
    version: PostDescribeFleetHistoryVersionEnum;
}
export declare class PostDescribeFleetHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeFleetHistoryRequest extends SpeakeasyBase {
    queryParams: PostDescribeFleetHistoryQueryParams;
    headers: PostDescribeFleetHistoryHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeFleetHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
