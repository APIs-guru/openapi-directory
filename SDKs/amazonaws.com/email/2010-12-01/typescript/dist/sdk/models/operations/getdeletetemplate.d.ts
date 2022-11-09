import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteTemplateActionEnum {
    DeleteTemplate = "DeleteTemplate"
}
export declare enum GetDeleteTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteTemplateQueryParams extends SpeakeasyBase {
    action: GetDeleteTemplateActionEnum;
    templateName: string;
    version: GetDeleteTemplateVersionEnum;
}
export declare class GetDeleteTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTemplateRequest extends SpeakeasyBase {
    queryParams: GetDeleteTemplateQueryParams;
    headers: GetDeleteTemplateHeaders;
}
export declare class GetDeleteTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
