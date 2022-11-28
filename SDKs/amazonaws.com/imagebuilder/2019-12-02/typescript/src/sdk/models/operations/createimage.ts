import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateImageHeaders extends SpeakeasyBase {
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


// CreateImageRequestBodyImageTestsConfiguration
/** 
 * Image tests configuration.
**/
export class CreateImageRequestBodyImageTestsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageTestsEnabled" })
  imageTestsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeoutMinutes" })
  timeoutMinutes?: number;
}


export class CreateImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=distributionConfigurationArn" })
  distributionConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=enhancedImageMetadataEnabled" })
  enhancedImageMetadataEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=imageTestsConfiguration" })
  imageTestsConfiguration?: CreateImageRequestBodyImageTestsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateImageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateImageRequestBody;
}


export class CreateImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callRateLimitExceededException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createImageResponse?: shared.CreateImageResponse;

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
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
