import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateDeviceDefinitionVersionPathParams extends SpeakeasyBase {
    deviceDefinitionId: string;
}
export declare class CreateDeviceDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class CreateDeviceDefinitionVersionRequestBody extends SpeakeasyBase {
    devices?: shared.Device[];
}
export declare class CreateDeviceDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: CreateDeviceDefinitionVersionPathParams;
    headers: CreateDeviceDefinitionVersionHeaders;
    request: CreateDeviceDefinitionVersionRequestBody;
}
export declare class CreateDeviceDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createDeviceDefinitionVersionResponse?: shared.CreateDeviceDefinitionVersionResponse;
    statusCode: number;
}
