import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerOverrides } from "./containeroverrides";


// NodePropertyOverride
/** 
 * Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.
**/
export class NodePropertyOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerOverrides" })
  containerOverrides?: ContainerOverrides;

  @Metadata({ data: "json, name=targetNodes" })
  targetNodes: string;
}
