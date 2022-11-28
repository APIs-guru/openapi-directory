import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateAutoScalingConfigurationRequest extends SpeakeasyBase {
    autoScalingConfigurationName: string;
    maxConcurrency?: number;
    maxSize?: number;
    minSize?: number;
    tags?: Tag[];
}
