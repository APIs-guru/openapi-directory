import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetTemplateActionEnum {
    GetTemplate = "GetTemplate"
}
export declare enum PostGetTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetTemplateQueryParams extends SpeakeasyBase {
    action: PostGetTemplateActionEnum;
    version: PostGetTemplateVersionEnum;
}
export declare class PostGetTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetTemplateRequest extends SpeakeasyBase {
    queryParams: PostGetTemplateQueryParams;
    headers: PostGetTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostGetTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
