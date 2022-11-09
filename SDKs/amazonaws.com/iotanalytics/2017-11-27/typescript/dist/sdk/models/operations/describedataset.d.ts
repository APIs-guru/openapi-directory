import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeDatasetPathParams extends SpeakeasyBase {
    datasetName: string;
}
export declare class DescribeDatasetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDatasetRequest extends SpeakeasyBase {
    pathParams: DescribeDatasetPathParams;
    headers: DescribeDatasetHeaders;
}
export declare class DescribeDatasetResponse extends SpeakeasyBase {
    contentType: string;
    describeDatasetResponse?: shared.DescribeDatasetResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
