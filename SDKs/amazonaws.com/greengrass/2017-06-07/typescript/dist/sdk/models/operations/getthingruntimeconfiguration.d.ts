import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetThingRuntimeConfigurationPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class GetThingRuntimeConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetThingRuntimeConfigurationRequest extends SpeakeasyBase {
    pathParams: GetThingRuntimeConfigurationPathParams;
    headers: GetThingRuntimeConfigurationHeaders;
}
export declare class GetThingRuntimeConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getThingRuntimeConfigurationResponse?: shared.GetThingRuntimeConfigurationResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
