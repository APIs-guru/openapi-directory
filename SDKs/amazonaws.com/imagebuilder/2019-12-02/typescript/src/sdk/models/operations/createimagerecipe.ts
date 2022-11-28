import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateImageRecipeHeaders extends SpeakeasyBase {
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


// CreateImageRecipeRequestBodyAdditionalInstanceConfiguration
/** 
 * In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
**/
export class CreateImageRecipeRequestBodyAdditionalInstanceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=systemsManagerAgent" })
  systemsManagerAgent?: shared.SystemsManagerAgent;

  @SpeakeasyMetadata({ data: "json, name=userDataOverride" })
  userDataOverride?: string;
}


export class CreateImageRecipeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalInstanceConfiguration" })
  additionalInstanceConfiguration?: CreateImageRecipeRequestBodyAdditionalInstanceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=blockDeviceMappings", elemType: shared.InstanceBlockDeviceMapping })
  blockDeviceMappings?: shared.InstanceBlockDeviceMapping[];

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=components", elemType: shared.ComponentConfiguration })
  components: shared.ComponentConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentImage" })
  parentImage: string;

  @SpeakeasyMetadata({ data: "json, name=semanticVersion" })
  semanticVersion: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}


export class CreateImageRecipeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateImageRecipeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateImageRecipeRequestBody;
}


export class CreateImageRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callRateLimitExceededException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createImageRecipeResponse?: shared.CreateImageRecipeResponse;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  invalidVersionNumberException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

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
