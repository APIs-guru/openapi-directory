import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateImageRecipeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
**/
export declare class CreateImageRecipeRequestBodyAdditionalInstanceConfiguration extends SpeakeasyBase {
    systemsManagerAgent?: shared.SystemsManagerAgent;
    userDataOverride?: string;
}
export declare class CreateImageRecipeRequestBody extends SpeakeasyBase {
    additionalInstanceConfiguration?: CreateImageRecipeRequestBodyAdditionalInstanceConfiguration;
    blockDeviceMappings?: shared.InstanceBlockDeviceMapping[];
    clientToken: string;
    components: shared.ComponentConfiguration[];
    description?: string;
    name: string;
    parentImage: string;
    semanticVersion: string;
    tags?: Map<string, string>;
    workingDirectory?: string;
}
export declare class CreateImageRecipeRequest extends SpeakeasyBase {
    headers: CreateImageRecipeHeaders;
    request: CreateImageRecipeRequestBody;
}
export declare class CreateImageRecipeResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    createImageRecipeResponse?: shared.CreateImageRecipeResponse;
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
