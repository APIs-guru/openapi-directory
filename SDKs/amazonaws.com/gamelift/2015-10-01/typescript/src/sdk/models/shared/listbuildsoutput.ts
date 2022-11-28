import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";



// ListBuildsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ListBuildsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Builds", elemType: Build })
  builds?: Build[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
