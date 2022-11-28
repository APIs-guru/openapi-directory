import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LayerFailureCodeEnum } from "./layerfailurecodeenum";



// LayerFailure
/** 
 * An object representing an Amazon ECR image layer failure.
**/
export class LayerFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: LayerFailureCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=layerDigest" })
  layerDigest?: string;
}
