import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetContainerRepository } from "./targetcontainerrepository";
/**
 * Container distribution settings for encryption, licensing, and sharing in a specific Region.
**/
export declare class ContainerDistributionConfiguration extends SpeakeasyBase {
    containerTags?: string[];
    description?: string;
    targetRepository: TargetContainerRepository;
}
