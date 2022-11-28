import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



// AccountEnrollmentStatus
/** 
 * Describes the enrollment status of an organization's member accounts in Compute Optimizer.
**/
export class AccountEnrollmentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;
}
