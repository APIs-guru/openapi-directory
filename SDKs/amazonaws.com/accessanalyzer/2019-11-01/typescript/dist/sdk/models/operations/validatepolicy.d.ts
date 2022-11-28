import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidatePolicyQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ValidatePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ValidatePolicyRequestBodyLocaleEnum {
    De = "DE",
    En = "EN",
    Es = "ES",
    Fr = "FR",
    It = "IT",
    Ja = "JA",
    Ko = "KO",
    PtBr = "PT_BR",
    ZhCn = "ZH_CN",
    ZhTw = "ZH_TW"
}
export declare enum ValidatePolicyRequestBodyPolicyTypeEnum {
    IdentityPolicy = "IDENTITY_POLICY",
    ResourcePolicy = "RESOURCE_POLICY",
    ServiceControlPolicy = "SERVICE_CONTROL_POLICY"
}
export declare class ValidatePolicyRequestBody extends SpeakeasyBase {
    locale?: ValidatePolicyRequestBodyLocaleEnum;
    policyDocument: string;
    policyType: ValidatePolicyRequestBodyPolicyTypeEnum;
}
export declare class ValidatePolicyRequest extends SpeakeasyBase {
    queryParams: ValidatePolicyQueryParams;
    headers: ValidatePolicyHeaders;
    request: ValidatePolicyRequestBody;
}
export declare class ValidatePolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validatePolicyResponse?: shared.ValidatePolicyResponse;
    validationException?: any;
}
