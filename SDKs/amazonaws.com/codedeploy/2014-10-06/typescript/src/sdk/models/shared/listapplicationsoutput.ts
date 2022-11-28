import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListApplicationsOutput
/** 
 * Represents the output of a ListApplications operation.
**/
export class ListApplicationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applications" })
  applications?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
