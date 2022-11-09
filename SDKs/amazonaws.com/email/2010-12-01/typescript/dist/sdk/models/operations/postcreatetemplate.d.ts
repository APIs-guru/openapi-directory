import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateTemplateActionEnum {
    CreateTemplate = "CreateTemplate"
}
export declare enum PostCreateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateTemplateQueryParams extends SpeakeasyBase {
    action: PostCreateTemplateActionEnum;
    version: PostCreateTemplateVersionEnum;
}
export declare class PostCreateTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTemplateRequest extends SpeakeasyBase {
    queryParams: PostCreateTemplateQueryParams;
    headers: PostCreateTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
