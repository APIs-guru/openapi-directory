import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteCustomVerificationEmailTemplateActionEnum {
    DeleteCustomVerificationEmailTemplate = "DeleteCustomVerificationEmailTemplate"
}
export declare enum PostDeleteCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
    action: PostDeleteCustomVerificationEmailTemplateActionEnum;
    version: PostDeleteCustomVerificationEmailTemplateVersionEnum;
}
export declare class PostDeleteCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    queryParams: PostDeleteCustomVerificationEmailTemplateQueryParams;
    headers: PostDeleteCustomVerificationEmailTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
