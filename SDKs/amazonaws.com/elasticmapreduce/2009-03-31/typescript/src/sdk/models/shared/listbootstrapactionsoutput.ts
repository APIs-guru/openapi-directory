import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Command } from "./command";


// ListBootstrapActionsOutput
/** 
 * This output contains the bootstrap actions detail.
**/
export class ListBootstrapActionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BootstrapActions", elemType: shared.Command })
  bootstrapActions?: Command[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
