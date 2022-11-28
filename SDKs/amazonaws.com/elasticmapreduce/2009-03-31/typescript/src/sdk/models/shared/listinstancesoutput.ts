import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



// ListInstancesOutput
/** 
 * This output contains the list of instances.
**/
export class ListInstancesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Instances", elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
