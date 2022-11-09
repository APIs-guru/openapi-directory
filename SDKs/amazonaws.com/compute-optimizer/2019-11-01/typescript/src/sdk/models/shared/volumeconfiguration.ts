import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VolumeConfiguration
/** 
 * Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.
**/
export class VolumeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=volumeBaselineIOPS" })
  volumeBaselineIops?: number;

  @Metadata({ data: "json, name=volumeBaselineThroughput" })
  volumeBaselineThroughput?: number;

  @Metadata({ data: "json, name=volumeBurstIOPS" })
  volumeBurstIops?: number;

  @Metadata({ data: "json, name=volumeBurstThroughput" })
  volumeBurstThroughput?: number;

  @Metadata({ data: "json, name=volumeSize" })
  volumeSize?: number;

  @Metadata({ data: "json, name=volumeType" })
  volumeType?: string;
}
