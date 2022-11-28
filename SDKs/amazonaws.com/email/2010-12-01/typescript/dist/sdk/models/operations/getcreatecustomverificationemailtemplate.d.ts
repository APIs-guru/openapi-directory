import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateCustomVerificationEmailTemplateActionEnum {
    CreateCustomVerificationEmailTemplate = "CreateCustomVerificationEmailTemplate"
}
export declare enum GetCreateCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetCreateCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
    action: GetCreateCustomVerificationEmailTemplateActionEnum;
    failureRedirectionUrl: string;
    fromEmailAddress: string;
    successRedirectionUrl: string;
    templateContent: string;
    templateName: string;
    templateSubject: string;
    version: GetCreateCustomVerificationEmailTemplateVersionEnum;
}
export declare class GetCreateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    queryParams: GetCreateCustomVerificationEmailTemplateQueryParams;
    headers: GetCreateCustomVerificationEmailTemplateHeaders;
}
export declare class GetCreateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
