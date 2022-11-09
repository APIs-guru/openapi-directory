import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Instance } from "./instance";


// ListInstancesOutput
/** 
 * This output contains the list of instances.
**/
export class ListInstancesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Instances", elemType: shared.Instance })
  instances?: Instance[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
