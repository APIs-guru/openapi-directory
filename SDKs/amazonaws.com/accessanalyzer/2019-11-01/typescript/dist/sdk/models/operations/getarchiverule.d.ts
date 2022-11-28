import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetArchiveRulePathParams extends SpeakeasyBase {
    analyzerName: string;
    ruleName: string;
}
export declare class GetArchiveRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetArchiveRuleRequest extends SpeakeasyBase {
    pathParams: GetArchiveRulePathParams;
    headers: GetArchiveRuleHeaders;
}
export declare class GetArchiveRuleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getArchiveRuleResponse?: shared.GetArchiveRuleResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
