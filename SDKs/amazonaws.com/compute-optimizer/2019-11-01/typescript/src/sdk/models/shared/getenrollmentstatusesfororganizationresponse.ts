import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountEnrollmentStatus } from "./accountenrollmentstatus";



export class GetEnrollmentStatusesForOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountEnrollmentStatuses", elemType: AccountEnrollmentStatus })
  accountEnrollmentStatuses?: AccountEnrollmentStatus[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
