import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateContainerRecipeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateContainerRecipeRequestBodyContainerTypeEnum {
    Docker = "DOCKER"
}
/**
 * Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
**/
export declare class CreateContainerRecipeRequestBodyInstanceConfiguration extends SpeakeasyBase {
    blockDeviceMappings?: shared.InstanceBlockDeviceMapping[];
    image?: string;
}
export declare enum CreateContainerRecipeRequestBodyPlatformOverrideEnum {
    Windows = "Windows",
    Linux = "Linux"
}
/**
 * The container repository where the output container image is stored.
**/
export declare class CreateContainerRecipeRequestBodyTargetRepository extends SpeakeasyBase {
    repositoryName?: string;
    service?: shared.ContainerRepositoryServiceEnum;
}
export declare class CreateContainerRecipeRequestBody extends SpeakeasyBase {
    clientToken: string;
    components: shared.ComponentConfiguration[];
    containerType: CreateContainerRecipeRequestBodyContainerTypeEnum;
    description?: string;
    dockerfileTemplateData?: string;
    dockerfileTemplateUri?: string;
    imageOsVersionOverride?: string;
    instanceConfiguration?: CreateContainerRecipeRequestBodyInstanceConfiguration;
    kmsKeyId?: string;
    name: string;
    parentImage: string;
    platformOverride?: CreateContainerRecipeRequestBodyPlatformOverrideEnum;
    semanticVersion: string;
    tags?: Map<string, string>;
    targetRepository: CreateContainerRecipeRequestBodyTargetRepository;
    workingDirectory?: string;
}
export declare class CreateContainerRecipeRequest extends SpeakeasyBase {
    headers: CreateContainerRecipeHeaders;
    request: CreateContainerRecipeRequestBody;
}
export declare class CreateContainerRecipeResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    createContainerRecipeResponse?: shared.CreateContainerRecipeResponse;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    invalidRequestException?: any;
    invalidVersionNumberException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    serviceException?: any;
    serviceQuotaExceededException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
