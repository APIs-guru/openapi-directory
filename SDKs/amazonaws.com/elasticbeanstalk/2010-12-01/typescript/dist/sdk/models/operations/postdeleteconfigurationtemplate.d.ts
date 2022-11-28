import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteConfigurationTemplateActionEnum {
    DeleteConfigurationTemplate = "DeleteConfigurationTemplate"
}
export declare enum PostDeleteConfigurationTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteConfigurationTemplateQueryParams extends SpeakeasyBase {
    action: PostDeleteConfigurationTemplateActionEnum;
    version: PostDeleteConfigurationTemplateVersionEnum;
}
export declare class PostDeleteConfigurationTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteConfigurationTemplateRequest extends SpeakeasyBase {
    queryParams: PostDeleteConfigurationTemplateQueryParams;
    headers: PostDeleteConfigurationTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteConfigurationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
