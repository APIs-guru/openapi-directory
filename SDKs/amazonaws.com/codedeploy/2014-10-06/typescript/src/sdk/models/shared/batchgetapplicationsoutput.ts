import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationInfo } from "./applicationinfo";


// BatchGetApplicationsOutput
/** 
 * Represents the output of a <code>BatchGetApplications</code> operation.
**/
export class BatchGetApplicationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationsInfo", elemType: shared.ApplicationInfo })
  applicationsInfo?: ApplicationInfo[];
}
