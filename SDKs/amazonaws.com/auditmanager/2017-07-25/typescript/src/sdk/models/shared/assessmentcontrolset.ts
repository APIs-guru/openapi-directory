import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentControl } from "./assessmentcontrol";
import { Delegation } from "./delegation";
import { Role } from "./role";
import { ControlSetStatusEnum } from "./controlsetstatusenum";



// AssessmentControlSet
/** 
 *  Represents a set of controls in an Audit Manager assessment. 
**/
export class AssessmentControlSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controls", elemType: AssessmentControl })
  controls?: AssessmentControl[];

  @SpeakeasyMetadata({ data: "json, name=delegations", elemType: Delegation })
  delegations?: Delegation[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=manualEvidenceCount" })
  manualEvidenceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: Role })
  roles?: Role[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ControlSetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=systemEvidenceCount" })
  systemEvidenceCount?: number;
}
