import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteConfigurationTemplateActionEnum {
    DeleteConfigurationTemplate = "DeleteConfigurationTemplate"
}
export declare enum GetDeleteConfigurationTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteConfigurationTemplateQueryParams extends SpeakeasyBase {
    action: GetDeleteConfigurationTemplateActionEnum;
    applicationName: string;
    templateName: string;
    version: GetDeleteConfigurationTemplateVersionEnum;
}
export declare class GetDeleteConfigurationTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteConfigurationTemplateRequest extends SpeakeasyBase {
    queryParams: GetDeleteConfigurationTemplateQueryParams;
    headers: GetDeleteConfigurationTemplateHeaders;
}
export declare class GetDeleteConfigurationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
