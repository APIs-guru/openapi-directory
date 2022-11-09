import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeUpdateActionsActionEnum {
    DescribeUpdateActions = "DescribeUpdateActions"
}
export declare enum PostDescribeUpdateActionsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeUpdateActionsQueryParams extends SpeakeasyBase {
    action: PostDescribeUpdateActionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeUpdateActionsVersionEnum;
}
export declare class PostDescribeUpdateActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeUpdateActionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeUpdateActionsQueryParams;
    headers: PostDescribeUpdateActionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeUpdateActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
