import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSetIdentityMailFromDomainActionEnum {
    SetIdentityMailFromDomain = "SetIdentityMailFromDomain"
}
export declare enum GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum {
    UseDefaultValue = "UseDefaultValue",
    RejectMessage = "RejectMessage"
}
export declare enum GetSetIdentityMailFromDomainVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetSetIdentityMailFromDomainQueryParams extends SpeakeasyBase {
    action: GetSetIdentityMailFromDomainActionEnum;
    behaviorOnMxFailure?: GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum;
    identity: string;
    mailFromDomain?: string;
    version: GetSetIdentityMailFromDomainVersionEnum;
}
export declare class GetSetIdentityMailFromDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetIdentityMailFromDomainRequest extends SpeakeasyBase {
    queryParams: GetSetIdentityMailFromDomainQueryParams;
    headers: GetSetIdentityMailFromDomainHeaders;
}
export declare class GetSetIdentityMailFromDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
