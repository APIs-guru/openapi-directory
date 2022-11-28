import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceSummary } from "./instancesummary";



// GetDeploymentInstanceOutput
/** 
 *  Represents the output of a <code>GetDeploymentInstance</code> operation. 
**/
export class GetDeploymentInstanceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceSummary" })
  instanceSummary?: InstanceSummary;
}
