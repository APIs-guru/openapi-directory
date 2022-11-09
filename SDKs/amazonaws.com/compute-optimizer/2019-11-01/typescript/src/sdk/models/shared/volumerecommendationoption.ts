import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VolumeConfiguration } from "./volumeconfiguration";


// VolumeRecommendationOption
/** 
 * Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.
**/
export class VolumeRecommendationOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: VolumeConfiguration;

  @Metadata({ data: "json, name=performanceRisk" })
  performanceRisk?: number;

  @Metadata({ data: "json, name=rank" })
  rank?: number;
}
