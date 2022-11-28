import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetContainerRepository } from "./targetcontainerrepository";



// ContainerDistributionConfiguration
/** 
 * Container distribution settings for encryption, licensing, and sharing in a specific Region.
**/
export class ContainerDistributionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerTags" })
  containerTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=targetRepository" })
  targetRepository: TargetContainerRepository;
}
