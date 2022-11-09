import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateCustomVerificationEmailTemplateActionEnum {
    UpdateCustomVerificationEmailTemplate = "UpdateCustomVerificationEmailTemplate"
}
export declare enum GetUpdateCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetUpdateCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
    action: GetUpdateCustomVerificationEmailTemplateActionEnum;
    failureRedirectionUrl?: string;
    fromEmailAddress?: string;
    successRedirectionUrl?: string;
    templateContent?: string;
    templateName: string;
    templateSubject?: string;
    version: GetUpdateCustomVerificationEmailTemplateVersionEnum;
}
export declare class GetUpdateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    queryParams: GetUpdateCustomVerificationEmailTemplateQueryParams;
    headers: GetUpdateCustomVerificationEmailTemplateHeaders;
}
export declare class GetUpdateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
