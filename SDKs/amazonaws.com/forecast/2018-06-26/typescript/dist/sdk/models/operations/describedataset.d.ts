import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDatasetXAmzTargetEnum {
    AmazonForecastDescribeDataset = "AmazonForecast.DescribeDataset"
}
export declare class DescribeDatasetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatasetXAmzTargetEnum;
}
export declare class DescribeDatasetRequest extends SpeakeasyBase {
    headers: DescribeDatasetHeaders;
    request: shared.DescribeDatasetRequest;
}
export declare class DescribeDatasetResponse extends SpeakeasyBase {
    contentType: string;
    describeDatasetResponse?: shared.DescribeDatasetResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
