import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAgentXAmzTargetEnum {
    FmrsServiceDescribeAgent = "FmrsService.DescribeAgent"
}
export declare class DescribeAgentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAgentXAmzTargetEnum;
}
export declare class DescribeAgentRequest extends SpeakeasyBase {
    headers: DescribeAgentHeaders;
    request: shared.DescribeAgentRequest;
}
export declare class DescribeAgentResponse extends SpeakeasyBase {
    contentType: string;
    describeAgentResponse?: shared.DescribeAgentResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
