import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListFleetsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ListFleetsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetIds" })
  fleetIds?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
