import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateContainerRecipeHeaders extends SpeakeasyBase {
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

export enum CreateContainerRecipeRequestBodyContainerTypeEnum {
    Docker = "DOCKER"
}


// CreateContainerRecipeRequestBodyInstanceConfiguration
/** 
 * Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
**/
export class CreateContainerRecipeRequestBodyInstanceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockDeviceMappings", elemType: shared.InstanceBlockDeviceMapping })
  blockDeviceMappings?: shared.InstanceBlockDeviceMapping[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;
}

export enum CreateContainerRecipeRequestBodyPlatformOverrideEnum {
    Windows = "Windows",
    Linux = "Linux"
}


// CreateContainerRecipeRequestBodyTargetRepository
/** 
 * The container repository where the output container image is stored.
**/
export class CreateContainerRecipeRequestBodyTargetRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: shared.ContainerRepositoryServiceEnum;
}


export class CreateContainerRecipeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=components", elemType: shared.ComponentConfiguration })
  components: shared.ComponentConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=containerType" })
  containerType: CreateContainerRecipeRequestBodyContainerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerfileTemplateData" })
  dockerfileTemplateData?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerfileTemplateUri" })
  dockerfileTemplateUri?: string;

  @SpeakeasyMetadata({ data: "json, name=imageOsVersionOverride" })
  imageOsVersionOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceConfiguration" })
  instanceConfiguration?: CreateContainerRecipeRequestBodyInstanceConfiguration;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentImage" })
  parentImage: string;

  @SpeakeasyMetadata({ data: "json, name=platformOverride" })
  platformOverride?: CreateContainerRecipeRequestBodyPlatformOverrideEnum;

  @SpeakeasyMetadata({ data: "json, name=semanticVersion" })
  semanticVersion: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targetRepository" })
  targetRepository: CreateContainerRecipeRequestBodyTargetRepository;

  @SpeakeasyMetadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}


export class CreateContainerRecipeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateContainerRecipeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateContainerRecipeRequestBody;
}


export class CreateContainerRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callRateLimitExceededException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createContainerRecipeResponse?: shared.CreateContainerRecipeResponse;

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
