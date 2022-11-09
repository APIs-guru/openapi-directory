import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountEnrollmentStatus } from "./accountenrollmentstatus";


export class GetEnrollmentStatusesForOrganizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountEnrollmentStatuses", elemType: shared.AccountEnrollmentStatus })
  accountEnrollmentStatuses?: AccountEnrollmentStatus[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
