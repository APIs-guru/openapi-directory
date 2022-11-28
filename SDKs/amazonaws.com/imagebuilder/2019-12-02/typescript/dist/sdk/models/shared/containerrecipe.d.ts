import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentConfiguration } from "./componentconfiguration";
import { ContainerTypeEnum } from "./containertypeenum";
import { InstanceConfiguration } from "./instanceconfiguration";
import { PlatformEnum } from "./platformenum";
import { TargetContainerRepository } from "./targetcontainerrepository";
/**
 * A container recipe.
**/
export declare class ContainerRecipe extends SpeakeasyBase {
    arn?: string;
    components?: ComponentConfiguration[];
    containerType?: ContainerTypeEnum;
    dateCreated?: string;
    description?: string;
    dockerfileTemplateData?: string;
    encrypted?: boolean;
    instanceConfiguration?: InstanceConfiguration;
    kmsKeyId?: string;
    name?: string;
    owner?: string;
    parentImage?: string;
    platform?: PlatformEnum;
    tags?: Map<string, string>;
    targetRepository?: TargetContainerRepository;
    version?: string;
    workingDirectory?: string;
}
