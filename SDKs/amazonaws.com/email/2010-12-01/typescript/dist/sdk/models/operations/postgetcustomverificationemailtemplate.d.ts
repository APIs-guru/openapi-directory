import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetCustomVerificationEmailTemplateActionEnum {
    GetCustomVerificationEmailTemplate = "GetCustomVerificationEmailTemplate"
}
export declare enum PostGetCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
    action: PostGetCustomVerificationEmailTemplateActionEnum;
    version: PostGetCustomVerificationEmailTemplateVersionEnum;
}
export declare class PostGetCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    queryParams: PostGetCustomVerificationEmailTemplateQueryParams;
    headers: PostGetCustomVerificationEmailTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostGetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
