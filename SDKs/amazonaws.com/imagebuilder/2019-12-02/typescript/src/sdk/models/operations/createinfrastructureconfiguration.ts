import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateInfrastructureConfigurationHeaders extends SpeakeasyBase {
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


// CreateInfrastructureConfigurationRequestBodyLogging
/** 
 * Logging configuration defines where Image Builder uploads your logs.
**/
export class CreateInfrastructureConfigurationRequestBodyLogging extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Logs" })
  s3Logs?: shared.S3Logs;
}


export class CreateInfrastructureConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=instanceProfileName" })
  instanceProfileName: string;

  @Metadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @Metadata({ data: "json, name=keyPair" })
  keyPair?: string;

  @Metadata({ data: "json, name=logging" })
  logging?: CreateInfrastructureConfigurationRequestBodyLogging;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=snsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=subnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=terminateInstanceOnFailure" })
  terminateInstanceOnFailure?: boolean;
}


export class CreateInfrastructureConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateInfrastructureConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateInfrastructureConfigurationRequestBody;
}


export class CreateInfrastructureConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createInfrastructureConfigurationResponse?: shared.CreateInfrastructureConfigurationResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
