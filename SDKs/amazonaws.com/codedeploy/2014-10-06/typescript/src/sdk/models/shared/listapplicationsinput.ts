import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListApplicationsInput
/** 
 * Represents the input of a <code>ListApplications</code> operation.
**/
export class ListApplicationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
