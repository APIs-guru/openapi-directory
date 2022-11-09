import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListBootstrapActionsInput
/** 
 * This input determines which bootstrap actions to retrieve.
**/
export class ListBootstrapActionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
