import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElasticGpuStatusEnum } from "./elasticgpustatusenum";



// ElasticGpuHealth
/** 
 * Describes the status of an Elastic Graphics accelerator.
**/
export class ElasticGpuHealth extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: ElasticGpuStatusEnum;
}
