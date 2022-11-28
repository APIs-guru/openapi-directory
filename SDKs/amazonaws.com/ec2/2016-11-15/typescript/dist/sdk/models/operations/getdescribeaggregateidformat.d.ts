import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeAggregateIdFormatActionEnum {
    DescribeAggregateIdFormat = "DescribeAggregateIdFormat"
}
export declare enum GetDescribeAggregateIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeAggregateIdFormatQueryParams extends SpeakeasyBase {
    action: GetDescribeAggregateIdFormatActionEnum;
    dryRun?: boolean;
    version: GetDescribeAggregateIdFormatVersionEnum;
}
export declare class GetDescribeAggregateIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAggregateIdFormatRequest extends SpeakeasyBase {
    queryParams: GetDescribeAggregateIdFormatQueryParams;
    headers: GetDescribeAggregateIdFormatHeaders;
}
export declare class GetDescribeAggregateIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
