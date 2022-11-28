import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateConfigurationTemplateActionEnum {
    CreateConfigurationTemplate = "CreateConfigurationTemplate"
}
export declare enum PostCreateConfigurationTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateConfigurationTemplateQueryParams extends SpeakeasyBase {
    action: PostCreateConfigurationTemplateActionEnum;
    version: PostCreateConfigurationTemplateVersionEnum;
}
export declare class PostCreateConfigurationTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateConfigurationTemplateRequest extends SpeakeasyBase {
    queryParams: PostCreateConfigurationTemplateQueryParams;
    headers: PostCreateConfigurationTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostCreateConfigurationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
