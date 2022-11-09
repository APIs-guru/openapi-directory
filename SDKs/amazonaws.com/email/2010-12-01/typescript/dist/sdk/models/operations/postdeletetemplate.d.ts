import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteTemplateActionEnum {
    DeleteTemplate = "DeleteTemplate"
}
export declare enum PostDeleteTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteTemplateQueryParams extends SpeakeasyBase {
    action: PostDeleteTemplateActionEnum;
    version: PostDeleteTemplateVersionEnum;
}
export declare class PostDeleteTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTemplateRequest extends SpeakeasyBase {
    queryParams: PostDeleteTemplateQueryParams;
    headers: PostDeleteTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
