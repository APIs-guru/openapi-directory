import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetContainerRepository } from "./targetcontainerrepository";


// ContainerDistributionConfiguration
/** 
 * Container distribution settings for encryption, licensing, and sharing in a specific Region.
**/
export class ContainerDistributionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerTags" })
  containerTags?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=targetRepository" })
  targetRepository: TargetContainerRepository;
}
