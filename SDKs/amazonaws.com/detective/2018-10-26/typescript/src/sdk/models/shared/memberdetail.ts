import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberDisabledReasonEnum } from "./memberdisabledreasonenum";
import { MemberStatusEnum } from "./memberstatusenum";


// MemberDetail
/** 
 * Details about a member account that was invited to contribute to a behavior graph.
**/
export class MemberDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=AdministratorId" })
  administratorId?: string;

  @Metadata({ data: "json, name=DisabledReason" })
  disabledReason?: MemberDisabledReasonEnum;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=GraphArn" })
  graphArn?: string;

  @Metadata({ data: "json, name=InvitedTime" })
  invitedTime?: Date;

  @Metadata({ data: "json, name=MasterId" })
  masterId?: string;

  @Metadata({ data: "json, name=PercentOfGraphUtilization" })
  percentOfGraphUtilization?: number;

  @Metadata({ data: "json, name=PercentOfGraphUtilizationUpdatedTime" })
  percentOfGraphUtilizationUpdatedTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: MemberStatusEnum;

  @Metadata({ data: "json, name=UpdatedTime" })
  updatedTime?: Date;

  @Metadata({ data: "json, name=VolumeUsageInBytes" })
  volumeUsageInBytes?: number;

  @Metadata({ data: "json, name=VolumeUsageUpdatedTime" })
  volumeUsageUpdatedTime?: Date;
}
