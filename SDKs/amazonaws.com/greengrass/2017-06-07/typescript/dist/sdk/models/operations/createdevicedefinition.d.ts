import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDeviceDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
/**
 * Information about a device definition version.
**/
export declare class CreateDeviceDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    devices?: shared.Device[];
}
export declare class CreateDeviceDefinitionRequestBody extends SpeakeasyBase {
    initialVersion?: CreateDeviceDefinitionRequestBodyInitialVersion;
    name?: string;
    tags?: Map<string, string>;
}
export declare class CreateDeviceDefinitionRequest extends SpeakeasyBase {
    headers: CreateDeviceDefinitionHeaders;
    request: CreateDeviceDefinitionRequestBody;
}
export declare class CreateDeviceDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createDeviceDefinitionResponse?: shared.CreateDeviceDefinitionResponse;
    statusCode: number;
}
