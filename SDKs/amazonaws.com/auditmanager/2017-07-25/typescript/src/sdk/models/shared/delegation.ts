import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleTypeEnum } from "./roletypeenum";
import { DelegationStatusEnum } from "./delegationstatusenum";


// Delegation
/** 
 *  The assignment of a control set to a delegate for review. 
**/
export class Delegation extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @Metadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=controlSetId" })
  controlSetId?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=roleType" })
  roleType?: RoleTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: DelegationStatusEnum;
}
