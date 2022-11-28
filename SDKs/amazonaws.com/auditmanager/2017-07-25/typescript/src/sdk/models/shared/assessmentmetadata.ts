import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportsDestination } from "./assessmentreportsdestination";
import { Delegation } from "./delegation";
import { Role } from "./role";
import { Scope } from "./scope";
import { AssessmentStatusEnum } from "./assessmentstatusenum";



// AssessmentMetadata
/** 
 *  The metadata associated with the specified assessment. 
**/
export class AssessmentMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentReportsDestination" })
  assessmentReportsDestination?: AssessmentReportsDestination;

  @SpeakeasyMetadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=delegations", elemType: Delegation })
  delegations?: Delegation[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: Role })
  roles?: Role[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: Scope;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AssessmentStatusEnum;
}
