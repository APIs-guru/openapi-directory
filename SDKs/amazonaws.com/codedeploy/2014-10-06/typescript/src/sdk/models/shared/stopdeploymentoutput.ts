import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StopStatusEnum } from "./stopstatusenum";


// StopDeploymentOutput
/** 
 *  Represents the output of a <code>StopDeployment</code> operation. 
**/
export class StopDeploymentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: StopStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
