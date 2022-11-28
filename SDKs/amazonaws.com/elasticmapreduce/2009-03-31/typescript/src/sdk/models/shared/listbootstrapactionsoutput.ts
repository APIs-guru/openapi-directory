import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";



// ListBootstrapActionsOutput
/** 
 * This output contains the bootstrap actions detail.
**/
export class ListBootstrapActionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BootstrapActions", elemType: Command })
  bootstrapActions?: Command[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
