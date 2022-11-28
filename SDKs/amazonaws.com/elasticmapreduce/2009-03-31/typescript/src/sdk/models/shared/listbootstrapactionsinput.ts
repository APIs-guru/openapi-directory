import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListBootstrapActionsInput
/** 
 * This input determines which bootstrap actions to retrieve.
**/
export class ListBootstrapActionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
