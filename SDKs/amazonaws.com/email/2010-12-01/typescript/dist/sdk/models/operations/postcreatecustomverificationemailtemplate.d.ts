import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateCustomVerificationEmailTemplateActionEnum {
    CreateCustomVerificationEmailTemplate = "CreateCustomVerificationEmailTemplate"
}
export declare enum PostCreateCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
    action: PostCreateCustomVerificationEmailTemplateActionEnum;
    version: PostCreateCustomVerificationEmailTemplateVersionEnum;
}
export declare class PostCreateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    queryParams: PostCreateCustomVerificationEmailTemplateQueryParams;
    headers: PostCreateCustomVerificationEmailTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostCreateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
