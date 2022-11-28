import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateIndexingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Thing group indexing configuration.
**/
export declare class UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration extends SpeakeasyBase {
    customFields?: shared.Field[];
    managedFields?: shared.Field[];
    thingGroupIndexingMode?: shared.ThingGroupIndexingModeEnum;
}
/**
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
export declare class UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration extends SpeakeasyBase {
    customFields?: shared.Field[];
    managedFields?: shared.Field[];
    thingConnectivityIndexingMode?: shared.ThingConnectivityIndexingModeEnum;
    thingIndexingMode?: shared.ThingIndexingModeEnum;
}
export declare class UpdateIndexingConfigurationRequestBody extends SpeakeasyBase {
    thingGroupIndexingConfiguration?: UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration;
    thingIndexingConfiguration?: UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration;
}
export declare class UpdateIndexingConfigurationRequest extends SpeakeasyBase {
    headers: UpdateIndexingConfigurationHeaders;
    request: UpdateIndexingConfigurationRequestBody;
}
export declare class UpdateIndexingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    updateIndexingConfigurationResponse?: Map<string, any>;
}
