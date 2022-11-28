import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateTemplateActionEnum {
    UpdateTemplate = "UpdateTemplate"
}
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export declare class GetUpdateTemplateTemplate extends SpeakeasyBase {
    htmlPart?: string;
    subjectPart?: string;
    templateName: string;
    textPart?: string;
}
export declare enum GetUpdateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetUpdateTemplateQueryParams extends SpeakeasyBase {
    action: GetUpdateTemplateActionEnum;
    template: GetUpdateTemplateTemplate;
    version: GetUpdateTemplateVersionEnum;
}
export declare class GetUpdateTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateTemplateRequest extends SpeakeasyBase {
    queryParams: GetUpdateTemplateQueryParams;
    headers: GetUpdateTemplateHeaders;
}
export declare class GetUpdateTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
