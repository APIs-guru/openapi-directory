import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateThingRuntimeConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ThingName" })
  thingName: string;
}


export class UpdateThingRuntimeConfigurationHeaders extends SpeakeasyBase {
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


// UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration
/** 
 * Configuration settings for running telemetry.
**/
export class UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Telemetry" })
  telemetry?: shared.TelemetryEnum;
}


export class UpdateThingRuntimeConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=TelemetryConfiguration" })
  telemetryConfiguration?: UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration;
}


export class UpdateThingRuntimeConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateThingRuntimeConfigurationPathParams;

  @Metadata()
  headers: UpdateThingRuntimeConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateThingRuntimeConfigurationRequestBody;
}


export class UpdateThingRuntimeConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateThingRuntimeConfigurationResponse?: Map<string, any>;
}
