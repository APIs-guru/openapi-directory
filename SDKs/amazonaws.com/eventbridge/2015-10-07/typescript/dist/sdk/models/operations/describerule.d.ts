import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeRuleXAmzTargetEnum {
    AwsEventsDescribeRule = "AWSEvents.DescribeRule"
}
export declare class DescribeRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRuleXAmzTargetEnum;
}
export declare class DescribeRuleRequest extends SpeakeasyBase {
    headers: DescribeRuleHeaders;
    request: shared.DescribeRuleRequest;
}
export declare class DescribeRuleResponse extends SpeakeasyBase {
    contentType: string;
    describeRuleResponse?: shared.DescribeRuleResponse;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
