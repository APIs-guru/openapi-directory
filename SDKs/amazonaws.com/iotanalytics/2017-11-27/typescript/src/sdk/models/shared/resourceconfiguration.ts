import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeTypeEnum } from "./computetypeenum";



// ResourceConfiguration
/** 
 * The configuration of the resource used to execute the <code>containerAction</code>.
**/
export class ResourceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeType" })
  computeType: ComputeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=volumeSizeInGB" })
  volumeSizeInGb: number;
}
