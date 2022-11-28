import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateConfigurationTemplateActionEnum {
    UpdateConfigurationTemplate = "UpdateConfigurationTemplate"
}
export declare enum PostUpdateConfigurationTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateConfigurationTemplateQueryParams extends SpeakeasyBase {
    action: PostUpdateConfigurationTemplateActionEnum;
    version: PostUpdateConfigurationTemplateVersionEnum;
}
export declare class PostUpdateConfigurationTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateConfigurationTemplateRequest extends SpeakeasyBase {
    queryParams: PostUpdateConfigurationTemplateQueryParams;
    headers: PostUpdateConfigurationTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateConfigurationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
