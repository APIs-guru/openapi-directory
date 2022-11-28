import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StopStatusEnum } from "./stopstatusenum";



// StopDeploymentOutput
/** 
 *  Represents the output of a <code>StopDeployment</code> operation. 
**/
export class StopDeploymentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StopStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
