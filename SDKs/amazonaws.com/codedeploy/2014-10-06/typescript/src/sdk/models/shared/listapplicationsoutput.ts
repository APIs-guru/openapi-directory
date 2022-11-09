import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListApplicationsOutput
/** 
 * Represents the output of a ListApplications operation.
**/
export class ListApplicationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applications" })
  applications?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
