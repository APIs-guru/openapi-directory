import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerOverrides } from "./containeroverrides";



// NodePropertyOverride
/** 
 * Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.
**/
export class NodePropertyOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerOverrides" })
  containerOverrides?: ContainerOverrides;

  @SpeakeasyMetadata({ data: "json, name=targetNodes" })
  targetNodes: string;
}
