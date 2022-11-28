import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetApplicationsInput
/** 
 * Represents the input of a <code>BatchGetApplications</code> operation.
**/
export class BatchGetApplicationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationNames" })
  applicationNames: string[];
}
