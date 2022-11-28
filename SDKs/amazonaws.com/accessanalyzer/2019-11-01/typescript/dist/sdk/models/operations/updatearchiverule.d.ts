import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateArchiveRulePathParams extends SpeakeasyBase {
    analyzerName: string;
    ruleName: string;
}
export declare class UpdateArchiveRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateArchiveRuleRequestBody extends SpeakeasyBase {
    clientToken?: string;
    filter: Map<string, shared.Criterion>;
}
export declare class UpdateArchiveRuleRequest extends SpeakeasyBase {
    pathParams: UpdateArchiveRulePathParams;
    headers: UpdateArchiveRuleHeaders;
    request: UpdateArchiveRuleRequestBody;
}
export declare class UpdateArchiveRuleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
