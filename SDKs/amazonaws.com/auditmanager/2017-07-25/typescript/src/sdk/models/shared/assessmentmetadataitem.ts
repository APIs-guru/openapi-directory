import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Delegation } from "./delegation";
import { Role } from "./role";
import { AssessmentStatusEnum } from "./assessmentstatusenum";



// AssessmentMetadataItem
/** 
 *  A metadata object associated with an assessment in Audit Manager. 
**/
export class AssessmentMetadataItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=delegations", elemType: Delegation })
  delegations?: Delegation[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: Role })
  roles?: Role[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AssessmentStatusEnum;
}
