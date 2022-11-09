import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectMitigationActionsTaskTarget
/** 
 *  The target of a mitigation action task. 
**/
export class DetectMitigationActionsTaskTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=behaviorName" })
  behaviorName?: string;

  @Metadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @Metadata({ data: "json, name=violationIds" })
  violationIds?: string[];
}
