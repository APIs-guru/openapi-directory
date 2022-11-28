import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteArchiveRulePathParams extends SpeakeasyBase {
    analyzerName: string;
    ruleName: string;
}
export declare class DeleteArchiveRuleQueryParams extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DeleteArchiveRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteArchiveRuleRequest extends SpeakeasyBase {
    pathParams: DeleteArchiveRulePathParams;
    queryParams: DeleteArchiveRuleQueryParams;
    headers: DeleteArchiveRuleHeaders;
}
export declare class DeleteArchiveRuleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
