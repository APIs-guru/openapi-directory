import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentReportsDestination } from "./assessmentreportsdestination";
import { Role } from "./role";


// Settings
/** 
 *  The settings object that holds all supported Audit Manager settings. 
**/
export class Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultAssessmentReportsDestination" })
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;

  @Metadata({ data: "json, name=defaultProcessOwners", elemType: shared.Role })
  defaultProcessOwners?: Role[];

  @Metadata({ data: "json, name=isAwsOrgEnabled" })
  isAwsOrgEnabled?: boolean;

  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=snsTopic" })
  snsTopic?: string;
}
