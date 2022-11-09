import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeDatasetImportJobXAmzTargetEnum {
    AmazonForecastDescribeDatasetImportJob = "AmazonForecast.DescribeDatasetImportJob"
}
export declare class DescribeDatasetImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatasetImportJobXAmzTargetEnum;
}
export declare class DescribeDatasetImportJobRequest extends SpeakeasyBase {
    headers: DescribeDatasetImportJobHeaders;
    request: shared.DescribeDatasetImportJobRequest;
}
export declare class DescribeDatasetImportJobResponse extends SpeakeasyBase {
    contentType: string;
    describeDatasetImportJobResponse?: shared.DescribeDatasetImportJobResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
