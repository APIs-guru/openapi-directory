import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateAutoScalingConfigurationRequest extends SpeakeasyBase {
    autoScalingConfigurationName: string;
    maxConcurrency?: number;
    maxSize?: number;
    minSize?: number;
    tags?: Tag[];
}
