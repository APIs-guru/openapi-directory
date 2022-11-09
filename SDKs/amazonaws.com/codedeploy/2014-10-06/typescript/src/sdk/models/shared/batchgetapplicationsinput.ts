import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetApplicationsInput
/** 
 * Represents the input of a <code>BatchGetApplications</code> operation.
**/
export class BatchGetApplicationsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationNames" })
  applicationNames: string[];
}
