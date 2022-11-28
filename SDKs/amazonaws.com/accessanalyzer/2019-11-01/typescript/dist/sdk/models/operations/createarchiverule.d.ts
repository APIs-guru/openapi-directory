import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateArchiveRulePathParams extends SpeakeasyBase {
    analyzerName: string;
}
export declare class CreateArchiveRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateArchiveRuleRequestBody extends SpeakeasyBase {
    clientToken?: string;
    filter: Map<string, shared.Criterion>;
    ruleName: string;
}
export declare class CreateArchiveRuleRequest extends SpeakeasyBase {
    pathParams: CreateArchiveRulePathParams;
    headers: CreateArchiveRuleHeaders;
    request: CreateArchiveRuleRequestBody;
}
export declare class CreateArchiveRuleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
