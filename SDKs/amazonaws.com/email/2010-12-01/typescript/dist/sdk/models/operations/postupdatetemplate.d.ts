import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateTemplateActionEnum {
    UpdateTemplate = "UpdateTemplate"
}
export declare enum PostUpdateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateTemplateQueryParams extends SpeakeasyBase {
    action: PostUpdateTemplateActionEnum;
    version: PostUpdateTemplateVersionEnum;
}
export declare class PostUpdateTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateTemplateRequest extends SpeakeasyBase {
    queryParams: PostUpdateTemplateQueryParams;
    headers: PostUpdateTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
