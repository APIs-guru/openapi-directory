import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeviceDefinitionPathParams extends SpeakeasyBase {
    deviceDefinitionId: string;
}
export declare class GetDeviceDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeviceDefinitionRequest extends SpeakeasyBase {
    pathParams: GetDeviceDefinitionPathParams;
    headers: GetDeviceDefinitionHeaders;
}
export declare class GetDeviceDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDeviceDefinitionResponse?: shared.GetDeviceDefinitionResponse;
    statusCode: number;
}
