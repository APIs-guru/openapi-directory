import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceSummary } from "./instancesummary";


// GetDeploymentInstanceOutput
/** 
 *  Represents the output of a <code>GetDeploymentInstance</code> operation. 
**/
export class GetDeploymentInstanceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceSummary" })
  instanceSummary?: InstanceSummary;
}
