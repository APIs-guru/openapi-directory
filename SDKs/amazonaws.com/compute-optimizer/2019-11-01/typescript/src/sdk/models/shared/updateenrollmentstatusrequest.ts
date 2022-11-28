import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



export class UpdateEnrollmentStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeMemberAccounts" })
  includeMemberAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: StatusEnum;
}
