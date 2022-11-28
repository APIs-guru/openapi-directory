import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeJobTemplatePathParams extends SpeakeasyBase {
    jobTemplateId: string;
}
export declare class DescribeJobTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeJobTemplateRequest extends SpeakeasyBase {
    pathParams: DescribeJobTemplatePathParams;
    headers: DescribeJobTemplateHeaders;
}
export declare class DescribeJobTemplateResponse extends SpeakeasyBase {
    contentType: string;
    describeJobTemplateResponse?: shared.DescribeJobTemplateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
