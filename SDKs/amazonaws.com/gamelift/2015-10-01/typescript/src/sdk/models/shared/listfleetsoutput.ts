import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListFleetsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ListFleetsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetIds" })
  fleetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
