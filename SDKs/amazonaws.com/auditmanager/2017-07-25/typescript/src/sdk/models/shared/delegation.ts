import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleTypeEnum } from "./roletypeenum";
import { DelegationStatusEnum } from "./delegationstatusenum";



// Delegation
/** 
 *  The assignment of a control set to a delegate for review. 
**/
export class Delegation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSetId" })
  controlSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=roleType" })
  roleType?: RoleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DelegationStatusEnum;
}
