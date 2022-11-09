import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListApplicationsInput
/** 
 * Represents the input of a <code>ListApplications</code> operation.
**/
export class ListApplicationsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
