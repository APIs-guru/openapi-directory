import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeComponentPathParams extends SpeakeasyBase {
    arn: string;
}
export declare class DescribeComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeComponentRequest extends SpeakeasyBase {
    pathParams: DescribeComponentPathParams;
    headers: DescribeComponentHeaders;
}
export declare class DescribeComponentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeComponentResponse?: shared.DescribeComponentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
