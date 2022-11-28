import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateInfrastructureConfigurationHeaders extends SpeakeasyBase {
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


// UpdateInfrastructureConfigurationRequestBodyLogging
/** 
 * Logging configuration defines where Image Builder uploads your logs.
**/
export class UpdateInfrastructureConfigurationRequestBodyLogging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Logs" })
  s3Logs?: shared.S3Logs;
}


export class UpdateInfrastructureConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn: string;

  @SpeakeasyMetadata({ data: "json, name=instanceProfileName" })
  instanceProfileName: string;

  @SpeakeasyMetadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=keyPair" })
  keyPair?: string;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: UpdateInfrastructureConfigurationRequestBodyLogging;

  @SpeakeasyMetadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=snsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=terminateInstanceOnFailure" })
  terminateInstanceOnFailure?: boolean;
}


export class UpdateInfrastructureConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateInfrastructureConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateInfrastructureConfigurationRequestBody;
}


export class UpdateInfrastructureConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callRateLimitExceededException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateInfrastructureConfigurationResponse?: shared.UpdateInfrastructureConfigurationResponse;
}
