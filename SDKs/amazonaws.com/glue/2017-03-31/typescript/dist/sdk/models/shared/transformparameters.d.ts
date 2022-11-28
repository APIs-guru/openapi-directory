import { SpeakeasyBase } from "../../../internal/utils";
import { FindMatchesParameters } from "./findmatchesparameters";
import { TransformTypeEnum } from "./transformtypeenum";
/**
 * The algorithm-specific parameters that are associated with the machine learning transform.
**/
export declare class TransformParameters extends SpeakeasyBase {
    findMatchesParameters?: FindMatchesParameters;
    transformType: TransformTypeEnum;
}
