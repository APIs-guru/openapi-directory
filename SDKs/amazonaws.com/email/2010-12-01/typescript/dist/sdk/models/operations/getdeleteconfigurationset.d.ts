import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteConfigurationSetActionEnum {
    DeleteConfigurationSet = "DeleteConfigurationSet"
}
export declare enum GetDeleteConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteConfigurationSetQueryParams extends SpeakeasyBase {
    action: GetDeleteConfigurationSetActionEnum;
    configurationSetName: string;
    version: GetDeleteConfigurationSetVersionEnum;
}
export declare class GetDeleteConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteConfigurationSetRequest extends SpeakeasyBase {
    queryParams: GetDeleteConfigurationSetQueryParams;
    headers: GetDeleteConfigurationSetHeaders;
}
export declare class GetDeleteConfigurationSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
