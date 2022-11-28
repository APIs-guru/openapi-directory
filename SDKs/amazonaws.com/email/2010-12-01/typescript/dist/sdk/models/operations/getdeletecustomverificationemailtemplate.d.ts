import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteCustomVerificationEmailTemplateActionEnum {
    DeleteCustomVerificationEmailTemplate = "DeleteCustomVerificationEmailTemplate"
}
export declare enum GetDeleteCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
    action: GetDeleteCustomVerificationEmailTemplateActionEnum;
    templateName: string;
    version: GetDeleteCustomVerificationEmailTemplateVersionEnum;
}
export declare class GetDeleteCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    queryParams: GetDeleteCustomVerificationEmailTemplateQueryParams;
    headers: GetDeleteCustomVerificationEmailTemplateHeaders;
}
export declare class GetDeleteCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
