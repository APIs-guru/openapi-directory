import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



export class GetEnrollmentStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=memberAccountsEnrolled" })
  memberAccountsEnrolled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=numberOfMemberAccountsOptedIn" })
  numberOfMemberAccountsOptedIn?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;
}
