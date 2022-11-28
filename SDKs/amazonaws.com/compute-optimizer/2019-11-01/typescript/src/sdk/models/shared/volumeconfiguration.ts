import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeConfiguration
/** 
 * Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.
**/
export class VolumeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=volumeBaselineIOPS" })
  volumeBaselineIops?: number;

  @SpeakeasyMetadata({ data: "json, name=volumeBaselineThroughput" })
  volumeBaselineThroughput?: number;

  @SpeakeasyMetadata({ data: "json, name=volumeBurstIOPS" })
  volumeBurstIops?: number;

  @SpeakeasyMetadata({ data: "json, name=volumeBurstThroughput" })
  volumeBurstThroughput?: number;

  @SpeakeasyMetadata({ data: "json, name=volumeSize" })
  volumeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=volumeType" })
  volumeType?: string;
}
