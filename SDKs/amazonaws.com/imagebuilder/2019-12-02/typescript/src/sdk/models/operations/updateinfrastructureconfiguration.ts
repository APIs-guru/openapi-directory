import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateInfrastructureConfigurationHeaders extends SpeakeasyBase {
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


// UpdateInfrastructureConfigurationRequestBodyLogging
/** 
 * Logging configuration defines where Image Builder uploads your logs.
**/
export class UpdateInfrastructureConfigurationRequestBodyLogging extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Logs" })
  s3Logs?: shared.S3Logs;
}


export class UpdateInfrastructureConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn: string;

  @Metadata({ data: "json, name=instanceProfileName" })
  instanceProfileName: string;

  @Metadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @Metadata({ data: "json, name=keyPair" })
  keyPair?: string;

  @Metadata({ data: "json, name=logging" })
  logging?: UpdateInfrastructureConfigurationRequestBodyLogging;

  @Metadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=snsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=subnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=terminateInstanceOnFailure" })
  terminateInstanceOnFailure?: boolean;
}


export class UpdateInfrastructureConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateInfrastructureConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateInfrastructureConfigurationRequestBody;
}


export class UpdateInfrastructureConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateInfrastructureConfigurationResponse?: shared.UpdateInfrastructureConfigurationResponse;
}
