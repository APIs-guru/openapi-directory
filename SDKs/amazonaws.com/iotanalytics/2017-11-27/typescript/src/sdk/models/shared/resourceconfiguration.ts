import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeTypeEnum } from "./computetypeenum";


// ResourceConfiguration
/** 
 * The configuration of the resource used to execute the <code>containerAction</code>.
**/
export class ResourceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeType" })
  computeType: ComputeTypeEnum;

  @Metadata({ data: "json, name=volumeSizeInGB" })
  volumeSizeInGb: number;
}
