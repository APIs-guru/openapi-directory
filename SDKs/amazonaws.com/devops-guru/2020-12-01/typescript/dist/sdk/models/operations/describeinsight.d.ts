import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeInsightPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DescribeInsightHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeInsightRequest extends SpeakeasyBase {
    pathParams: DescribeInsightPathParams;
    headers: DescribeInsightHeaders;
}
export declare class DescribeInsightResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeInsightResponse?: shared.DescribeInsightResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
