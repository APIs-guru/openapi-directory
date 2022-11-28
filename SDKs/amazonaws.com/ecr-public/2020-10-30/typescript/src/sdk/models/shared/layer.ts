import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LayerAvailabilityEnum } from "./layeravailabilityenum";



// Layer
/** 
 * An object representing an Amazon ECR image layer.
**/
export class Layer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layerAvailability" })
  layerAvailability?: LayerAvailabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=layerDigest" })
  layerDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=layerSize" })
  layerSize?: number;

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: string;
}
