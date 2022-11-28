import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTestRenderTemplateActionEnum {
    TestRenderTemplate = "TestRenderTemplate"
}
export declare enum PostTestRenderTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostTestRenderTemplateQueryParams extends SpeakeasyBase {
    action: PostTestRenderTemplateActionEnum;
    version: PostTestRenderTemplateVersionEnum;
}
export declare class PostTestRenderTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTestRenderTemplateRequest extends SpeakeasyBase {
    queryParams: PostTestRenderTemplateQueryParams;
    headers: PostTestRenderTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostTestRenderTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
