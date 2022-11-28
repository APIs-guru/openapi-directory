import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectMitigationActionsTaskTarget
/** 
 *  The target of a mitigation action task. 
**/
export class DetectMitigationActionsTaskTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=behaviorName" })
  behaviorName?: string;

  @SpeakeasyMetadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=violationIds" })
  violationIds?: string[];
}
