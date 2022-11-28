import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportsDestination } from "./assessmentreportsdestination";
import { Role } from "./role";



// Settings
/** 
 *  The settings object that holds all supported Audit Manager settings. 
**/
export class Settings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAssessmentReportsDestination" })
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;

  @SpeakeasyMetadata({ data: "json, name=defaultProcessOwners", elemType: Role })
  defaultProcessOwners?: Role[];

  @SpeakeasyMetadata({ data: "json, name=isAwsOrgEnabled" })
  isAwsOrgEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=snsTopic" })
  snsTopic?: string;
}
