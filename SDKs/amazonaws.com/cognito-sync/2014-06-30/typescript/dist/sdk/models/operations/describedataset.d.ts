import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDatasetPathParams extends SpeakeasyBase {
    datasetName: string;
    identityId: string;
    identityPoolId: string;
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
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
