import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateImageHeaders extends SpeakeasyBase {
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


// CreateImageRequestBodyImageTestsConfiguration
/** 
 * Image tests configuration.
**/
export class CreateImageRequestBodyImageTestsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageTestsEnabled" })
  imageTestsEnabled?: boolean;

  @Metadata({ data: "json, name=timeoutMinutes" })
  timeoutMinutes?: number;
}


export class CreateImageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @Metadata({ data: "json, name=distributionConfigurationArn" })
  distributionConfigurationArn?: string;

  @Metadata({ data: "json, name=enhancedImageMetadataEnabled" })
  enhancedImageMetadataEnabled?: boolean;

  @Metadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @Metadata({ data: "json, name=imageTestsConfiguration" })
  imageTestsConfiguration?: CreateImageRequestBodyImageTestsConfiguration;

  @Metadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateImageRequestBody;
}


export class CreateImageResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createImageResponse?: shared.CreateImageResponse;

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
  serviceQuotaExceededException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
