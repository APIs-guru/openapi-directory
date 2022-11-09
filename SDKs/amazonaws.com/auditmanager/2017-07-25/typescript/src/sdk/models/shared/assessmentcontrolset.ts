import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentControl } from "./assessmentcontrol";
import { Delegation } from "./delegation";
import { Role } from "./role";
import { ControlSetStatusEnum } from "./controlsetstatusenum";


// AssessmentControlSet
/** 
 *  Represents a set of controls in an Audit Manager assessment. 
**/
export class AssessmentControlSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=controls", elemType: shared.AssessmentControl })
  controls?: AssessmentControl[];

  @Metadata({ data: "json, name=delegations", elemType: shared.Delegation })
  delegations?: Delegation[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=manualEvidenceCount" })
  manualEvidenceCount?: number;

  @Metadata({ data: "json, name=roles", elemType: shared.Role })
  roles?: Role[];

  @Metadata({ data: "json, name=status" })
  status?: ControlSetStatusEnum;

  @Metadata({ data: "json, name=systemEvidenceCount" })
  systemEvidenceCount?: number;
}
