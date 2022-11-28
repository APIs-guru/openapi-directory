import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeConfiguration } from "./volumeconfiguration";



// VolumeRecommendationOption
/** 
 * Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.
**/
export class VolumeRecommendationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: VolumeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=performanceRisk" })
  performanceRisk?: number;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;
}
