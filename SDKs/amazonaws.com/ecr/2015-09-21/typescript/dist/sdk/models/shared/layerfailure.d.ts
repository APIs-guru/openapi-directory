import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LayerFailureCodeEnum } from "./layerfailurecodeenum";
/**
 * An object representing an Amazon ECR image layer failure.
**/
export declare class LayerFailure extends SpeakeasyBase {
    failureCode?: LayerFailureCodeEnum;
    failureReason?: string;
    layerDigest?: string;
}
