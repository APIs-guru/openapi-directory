import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LayerFailureCodeEnum } from "./layerfailurecodeenum";


// LayerFailure
/** 
 * An object representing an Amazon ECR image layer failure.
**/
export class LayerFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCode" })
  failureCode?: LayerFailureCodeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=layerDigest" })
  layerDigest?: string;
}
