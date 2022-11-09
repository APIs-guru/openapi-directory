import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


export class UpdateEnrollmentStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeMemberAccounts" })
  includeMemberAccounts?: boolean;

  @Metadata({ data: "json, name=status" })
  status: StatusEnum;
}
