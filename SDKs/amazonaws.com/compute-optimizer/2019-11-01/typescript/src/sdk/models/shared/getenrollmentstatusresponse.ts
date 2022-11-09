import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


export class GetEnrollmentStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @Metadata({ data: "json, name=memberAccountsEnrolled" })
  memberAccountsEnrolled?: boolean;

  @Metadata({ data: "json, name=numberOfMemberAccountsOptedIn" })
  numberOfMemberAccountsOptedIn?: number;

  @Metadata({ data: "json, name=status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;
}
