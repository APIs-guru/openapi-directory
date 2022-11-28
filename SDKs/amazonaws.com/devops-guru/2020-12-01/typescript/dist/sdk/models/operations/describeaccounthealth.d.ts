import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAccountHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAccountHealthRequest extends SpeakeasyBase {
    headers: DescribeAccountHealthHeaders;
}
export declare class DescribeAccountHealthResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAccountHealthResponse?: shared.DescribeAccountHealthResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
