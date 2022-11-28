import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeTypeEnum } from "./computetypeenum";
/**
 * The configuration of the resource used to execute the <code>containerAction</code>.
**/
export declare class ResourceConfiguration extends SpeakeasyBase {
    computeType: ComputeTypeEnum;
    volumeSizeInGb: number;
}
