import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateIndexingConfigurationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration
/** 
 * Thing group indexing configuration.
**/
export class UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields", elemType: shared.Field })
  customFields?: shared.Field[];

  @SpeakeasyMetadata({ data: "json, name=managedFields", elemType: shared.Field })
  managedFields?: shared.Field[];

  @SpeakeasyMetadata({ data: "json, name=thingGroupIndexingMode" })
  thingGroupIndexingMode?: shared.ThingGroupIndexingModeEnum;
}


// UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration
/** 
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
export class UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields", elemType: shared.Field })
  customFields?: shared.Field[];

  @SpeakeasyMetadata({ data: "json, name=managedFields", elemType: shared.Field })
  managedFields?: shared.Field[];

  @SpeakeasyMetadata({ data: "json, name=thingConnectivityIndexingMode" })
  thingConnectivityIndexingMode?: shared.ThingConnectivityIndexingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=thingIndexingMode" })
  thingIndexingMode?: shared.ThingIndexingModeEnum;
}


export class UpdateIndexingConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thingGroupIndexingConfiguration" })
  thingGroupIndexingConfiguration?: UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=thingIndexingConfiguration" })
  thingIndexingConfiguration?: UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration;
}


export class UpdateIndexingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateIndexingConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateIndexingConfigurationRequestBody;
}


export class UpdateIndexingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateIndexingConfigurationResponse?: Map<string, any>;
}
