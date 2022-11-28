import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeConversionTasksActionEnum {
    DescribeConversionTasks = "DescribeConversionTasks"
}
export declare enum GetDescribeConversionTasksVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeConversionTasksQueryParams extends SpeakeasyBase {
    action: GetDescribeConversionTasksActionEnum;
    conversionTaskId?: string[];
    dryRun?: boolean;
    version: GetDescribeConversionTasksVersionEnum;
}
export declare class GetDescribeConversionTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeConversionTasksRequest extends SpeakeasyBase {
    queryParams: GetDescribeConversionTasksQueryParams;
    headers: GetDescribeConversionTasksHeaders;
}
export declare class GetDescribeConversionTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
