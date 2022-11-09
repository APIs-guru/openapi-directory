import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateImageRecipeHeaders extends SpeakeasyBase {
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


// CreateImageRecipeRequestBodyAdditionalInstanceConfiguration
/** 
 * In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
**/
export class CreateImageRecipeRequestBodyAdditionalInstanceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=systemsManagerAgent" })
  systemsManagerAgent?: shared.SystemsManagerAgent;

  @Metadata({ data: "json, name=userDataOverride" })
  userDataOverride?: string;
}


export class CreateImageRecipeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalInstanceConfiguration" })
  additionalInstanceConfiguration?: CreateImageRecipeRequestBodyAdditionalInstanceConfiguration;

  @Metadata({ data: "json, name=blockDeviceMappings", elemType: shared.InstanceBlockDeviceMapping })
  blockDeviceMappings?: shared.InstanceBlockDeviceMapping[];

  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=components", elemType: shared.ComponentConfiguration })
  components: shared.ComponentConfiguration[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parentImage" })
  parentImage: string;

  @Metadata({ data: "json, name=semanticVersion" })
  semanticVersion: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}


export class CreateImageRecipeRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateImageRecipeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateImageRecipeRequestBody;
}


export class CreateImageRecipeResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createImageRecipeResponse?: shared.CreateImageRecipeResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidVersionNumberException?: any;

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
