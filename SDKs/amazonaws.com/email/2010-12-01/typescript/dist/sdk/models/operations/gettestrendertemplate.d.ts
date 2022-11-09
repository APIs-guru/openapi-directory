import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetTestRenderTemplateActionEnum {
    TestRenderTemplate = "TestRenderTemplate"
}
export declare enum GetTestRenderTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetTestRenderTemplateQueryParams extends SpeakeasyBase {
    action: GetTestRenderTemplateActionEnum;
    templateData: string;
    templateName: string;
    version: GetTestRenderTemplateVersionEnum;
}
export declare class GetTestRenderTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTestRenderTemplateRequest extends SpeakeasyBase {
    queryParams: GetTestRenderTemplateQueryParams;
    headers: GetTestRenderTemplateHeaders;
}
export declare class GetTestRenderTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
