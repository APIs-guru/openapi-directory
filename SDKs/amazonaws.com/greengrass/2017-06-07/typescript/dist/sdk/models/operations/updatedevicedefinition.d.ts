import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateDeviceDefinitionPathParams extends SpeakeasyBase {
    deviceDefinitionId: string;
}
export declare class UpdateDeviceDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDeviceDefinitionRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateDeviceDefinitionRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceDefinitionPathParams;
    headers: UpdateDeviceDefinitionHeaders;
    request: UpdateDeviceDefinitionRequestBody;
}
export declare class UpdateDeviceDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    updateDeviceDefinitionResponse?: Map<string, any>;
}
