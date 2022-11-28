import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationInfo } from "./applicationinfo";



// BatchGetApplicationsOutput
/** 
 * Represents the output of a <code>BatchGetApplications</code> operation.
**/
export class BatchGetApplicationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationsInfo", elemType: ApplicationInfo })
  applicationsInfo?: ApplicationInfo[];
}
