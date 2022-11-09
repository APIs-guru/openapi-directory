import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Build } from "./build";


// ListBuildsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ListBuildsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Builds", elemType: shared.Build })
  builds?: Build[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
