import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateIndexingConfigurationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration
/** 
 * Thing group indexing configuration.
**/
export class UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=customFields", elemType: shared.Field })
  customFields?: shared.Field[];

  @Metadata({ data: "json, name=managedFields", elemType: shared.Field })
  managedFields?: shared.Field[];

  @Metadata({ data: "json, name=thingGroupIndexingMode" })
  thingGroupIndexingMode?: shared.ThingGroupIndexingModeEnum;
}


// UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration
/** 
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
export class UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=customFields", elemType: shared.Field })
  customFields?: shared.Field[];

  @Metadata({ data: "json, name=managedFields", elemType: shared.Field })
  managedFields?: shared.Field[];

  @Metadata({ data: "json, name=thingConnectivityIndexingMode" })
  thingConnectivityIndexingMode?: shared.ThingConnectivityIndexingModeEnum;

  @Metadata({ data: "json, name=thingIndexingMode" })
  thingIndexingMode?: shared.ThingIndexingModeEnum;
}


export class UpdateIndexingConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingGroupIndexingConfiguration" })
  thingGroupIndexingConfiguration?: UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration;

  @Metadata({ data: "json, name=thingIndexingConfiguration" })
  thingIndexingConfiguration?: UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration;
}


export class UpdateIndexingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateIndexingConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateIndexingConfigurationRequestBody;
}


export class UpdateIndexingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateIndexingConfigurationResponse?: Map<string, any>;
}
