import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateThingRuntimeConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ThingName" })
  thingName: string;
}


export class UpdateThingRuntimeConfigurationHeaders extends SpeakeasyBase {
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


// UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration
/** 
 * Configuration settings for running telemetry.
**/
export class UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Telemetry" })
  telemetry?: shared.TelemetryEnum;
}


export class UpdateThingRuntimeConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TelemetryConfiguration" })
  telemetryConfiguration?: UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration;
}


export class UpdateThingRuntimeConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateThingRuntimeConfigurationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateThingRuntimeConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateThingRuntimeConfigurationRequestBody;
}


export class UpdateThingRuntimeConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateThingRuntimeConfigurationResponse?: Map<string, any>;
}
