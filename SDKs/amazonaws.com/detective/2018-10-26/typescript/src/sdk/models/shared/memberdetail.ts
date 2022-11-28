import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberDisabledReasonEnum } from "./memberdisabledreasonenum";
import { MemberStatusEnum } from "./memberstatusenum";



// MemberDetail
/** 
 * Details about a member account that was invited to contribute to a behavior graph.
**/
export class MemberDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AdministratorId" })
  administratorId?: string;

  @SpeakeasyMetadata({ data: "json, name=DisabledReason" })
  disabledReason?: MemberDisabledReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=GraphArn" })
  graphArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InvitedTime" })
  invitedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MasterId" })
  masterId?: string;

  @SpeakeasyMetadata({ data: "json, name=PercentOfGraphUtilization" })
  percentOfGraphUtilization?: number;

  @SpeakeasyMetadata({ data: "json, name=PercentOfGraphUtilizationUpdatedTime" })
  percentOfGraphUtilizationUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: MemberStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedTime" })
  updatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=VolumeUsageInBytes" })
  volumeUsageInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=VolumeUsageUpdatedTime" })
  volumeUsageUpdatedTime?: Date;
}
