import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApplyArchiveRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ApplyArchiveRuleRequestBody extends SpeakeasyBase {
    analyzerArn: string;
    clientToken?: string;
    ruleName: string;
}
export declare class ApplyArchiveRuleRequest extends SpeakeasyBase {
    headers: ApplyArchiveRuleHeaders;
    request: ApplyArchiveRuleRequestBody;
}
export declare class ApplyArchiveRuleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
