import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateCustomVerificationEmailTemplateActionEnum {
    UpdateCustomVerificationEmailTemplate = "UpdateCustomVerificationEmailTemplate"
}
export declare enum PostUpdateCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
    action: PostUpdateCustomVerificationEmailTemplateActionEnum;
    version: PostUpdateCustomVerificationEmailTemplateVersionEnum;
}
export declare class PostUpdateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    queryParams: PostUpdateCustomVerificationEmailTemplateQueryParams;
    headers: PostUpdateCustomVerificationEmailTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
