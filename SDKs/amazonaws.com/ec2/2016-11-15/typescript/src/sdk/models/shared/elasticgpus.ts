import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElasticGpuHealth } from "./elasticgpuhealth";
import { ElasticGpuStateEnum } from "./elasticgpustateenum";
import { Tag } from "./tag";



// ElasticGpus
/** 
 * Describes an Elastic Graphics accelerator.
**/
export class ElasticGpus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  elasticGpuHealth?: ElasticGpuHealth;

  @SpeakeasyMetadata()
  elasticGpuId?: string;

  @SpeakeasyMetadata()
  elasticGpuState?: ElasticGpuStateEnum;

  @SpeakeasyMetadata()
  elasticGpuType?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
