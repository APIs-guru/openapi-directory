import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LayerAvailabilityEnum } from "./layeravailabilityenum";


// Layer
/** 
 * An object representing an Amazon ECR image layer.
**/
export class Layer extends SpeakeasyBase {
  @Metadata({ data: "json, name=layerAvailability" })
  layerAvailability?: LayerAvailabilityEnum;

  @Metadata({ data: "json, name=layerDigest" })
  layerDigest?: string;

  @Metadata({ data: "json, name=layerSize" })
  layerSize?: number;

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: string;
}
