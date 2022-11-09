import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateTemplateActionEnum {
    CreateTemplate = "CreateTemplate"
}
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export declare class GetCreateTemplateTemplate extends SpeakeasyBase {
    htmlPart?: string;
    subjectPart?: string;
    templateName: string;
    textPart?: string;
}
export declare enum GetCreateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetCreateTemplateQueryParams extends SpeakeasyBase {
    action: GetCreateTemplateActionEnum;
    template: GetCreateTemplateTemplate;
    version: GetCreateTemplateVersionEnum;
}
export declare class GetCreateTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateTemplateRequest extends SpeakeasyBase {
    queryParams: GetCreateTemplateQueryParams;
    headers: GetCreateTemplateHeaders;
}
export declare class GetCreateTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
