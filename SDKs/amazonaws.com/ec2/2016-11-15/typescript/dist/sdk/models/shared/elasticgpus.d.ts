import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticGpuHealth } from "./elasticgpuhealth";
import { ElasticGpuStateEnum } from "./elasticgpustateenum";
import { Tag } from "./tag";
/**
 * Describes an Elastic Graphics accelerator.
**/
export declare class ElasticGpus extends SpeakeasyBase {
    availabilityZone?: string;
    elasticGpuHealth?: ElasticGpuHealth;
    elasticGpuId?: string;
    elasticGpuState?: ElasticGpuStateEnum;
    elasticGpuType?: string;
    instanceId?: string;
    tags?: Tag[];
}
