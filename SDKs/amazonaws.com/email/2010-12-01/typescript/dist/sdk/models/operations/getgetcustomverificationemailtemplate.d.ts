import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetCustomVerificationEmailTemplateActionEnum {
    GetCustomVerificationEmailTemplate = "GetCustomVerificationEmailTemplate"
}
export declare enum GetGetCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
    action: GetGetCustomVerificationEmailTemplateActionEnum;
    templateName: string;
    version: GetGetCustomVerificationEmailTemplateVersionEnum;
}
export declare class GetGetCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    queryParams: GetGetCustomVerificationEmailTemplateQueryParams;
    headers: GetGetCustomVerificationEmailTemplateHeaders;
}
export declare class GetGetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
