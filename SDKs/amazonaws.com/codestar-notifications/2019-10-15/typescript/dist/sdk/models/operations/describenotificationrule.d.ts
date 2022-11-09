import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeNotificationRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeNotificationRuleRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class DescribeNotificationRuleRequest extends SpeakeasyBase {
    headers: DescribeNotificationRuleHeaders;
    request: DescribeNotificationRuleRequestBody;
}
export declare class DescribeNotificationRuleResponse extends SpeakeasyBase {
    contentType: string;
    describeNotificationRuleResult?: shared.DescribeNotificationRuleResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
