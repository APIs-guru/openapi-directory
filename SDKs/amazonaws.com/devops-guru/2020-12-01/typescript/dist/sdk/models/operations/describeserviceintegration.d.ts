import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeServiceIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeServiceIntegrationRequest extends SpeakeasyBase {
    headers: DescribeServiceIntegrationHeaders;
}
export declare class DescribeServiceIntegrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeServiceIntegrationResponse?: shared.DescribeServiceIntegrationResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
