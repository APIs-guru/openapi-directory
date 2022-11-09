import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateContainerRecipeHeaders extends SpeakeasyBase {
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

export enum CreateContainerRecipeRequestBodyContainerTypeEnum {
    Docker = "DOCKER"
}


// CreateContainerRecipeRequestBodyInstanceConfiguration
/** 
 * Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
**/
export class CreateContainerRecipeRequestBodyInstanceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockDeviceMappings", elemType: shared.InstanceBlockDeviceMapping })
  blockDeviceMappings?: shared.InstanceBlockDeviceMapping[];

  @Metadata({ data: "json, name=image" })
  image?: string;
}

export enum CreateContainerRecipeRequestBodyPlatformOverrideEnum {
    Windows = "Windows"
,    Linux = "Linux"
}


// CreateContainerRecipeRequestBodyTargetRepository
/** 
 * The container repository where the output container image is stored.
**/
export class CreateContainerRecipeRequestBodyTargetRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=service" })
  service?: shared.ContainerRepositoryServiceEnum;
}


export class CreateContainerRecipeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=components", elemType: shared.ComponentConfiguration })
  components: shared.ComponentConfiguration[];

  @Metadata({ data: "json, name=containerType" })
  containerType: CreateContainerRecipeRequestBodyContainerTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dockerfileTemplateData" })
  dockerfileTemplateData?: string;

  @Metadata({ data: "json, name=dockerfileTemplateUri" })
  dockerfileTemplateUri?: string;

  @Metadata({ data: "json, name=imageOsVersionOverride" })
  imageOsVersionOverride?: string;

  @Metadata({ data: "json, name=instanceConfiguration" })
  instanceConfiguration?: CreateContainerRecipeRequestBodyInstanceConfiguration;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parentImage" })
  parentImage: string;

  @Metadata({ data: "json, name=platformOverride" })
  platformOverride?: CreateContainerRecipeRequestBodyPlatformOverrideEnum;

  @Metadata({ data: "json, name=semanticVersion" })
  semanticVersion: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=targetRepository" })
  targetRepository: CreateContainerRecipeRequestBodyTargetRepository;

  @Metadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}


export class CreateContainerRecipeRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateContainerRecipeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateContainerRecipeRequestBody;
}


export class CreateContainerRecipeResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createContainerRecipeResponse?: shared.CreateContainerRecipeResponse;

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
