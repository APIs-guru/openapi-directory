import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


// AccountEnrollmentStatus
/** 
 * Describes the enrollment status of an organization's member accounts in Compute Optimizer.
**/
export class AccountEnrollmentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @Metadata({ data: "json, name=status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;
}
