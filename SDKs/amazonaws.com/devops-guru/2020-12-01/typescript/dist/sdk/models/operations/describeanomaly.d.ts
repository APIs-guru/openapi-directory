import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAnomalyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DescribeAnomalyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAnomalyRequest extends SpeakeasyBase {
    pathParams: DescribeAnomalyPathParams;
    headers: DescribeAnomalyHeaders;
}
export declare class DescribeAnomalyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAnomalyResponse?: shared.DescribeAnomalyResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
