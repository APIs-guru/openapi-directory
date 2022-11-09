import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteDeviceDefinitionPathParams extends SpeakeasyBase {
    deviceDefinitionId: string;
}
export declare class DeleteDeviceDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDeviceDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteDeviceDefinitionPathParams;
    headers: DeleteDeviceDefinitionHeaders;
}
export declare class DeleteDeviceDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteDeviceDefinitionResponse?: Map<string, any>;
    statusCode: number;
}
