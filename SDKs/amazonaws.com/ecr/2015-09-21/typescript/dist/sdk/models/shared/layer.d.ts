import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LayerAvailabilityEnum } from "./layeravailabilityenum";
/**
 * An object representing an Amazon ECR image layer.
**/
export declare class Layer extends SpeakeasyBase {
    layerAvailability?: LayerAvailabilityEnum;
    layerDigest?: string;
    layerSize?: number;
    mediaType?: string;
}
