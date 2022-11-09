import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetTemplateActionEnum {
    GetTemplate = "GetTemplate"
}
export declare enum GetGetTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetTemplateQueryParams extends SpeakeasyBase {
    action: GetGetTemplateActionEnum;
    templateName: string;
    version: GetGetTemplateVersionEnum;
}
export declare class GetGetTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetTemplateRequest extends SpeakeasyBase {
    queryParams: GetGetTemplateQueryParams;
    headers: GetGetTemplateHeaders;
}
export declare class GetGetTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
