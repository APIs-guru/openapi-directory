import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountRoleStatusEnum } from "./accountrolestatusenum";



export class GetAdminAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdminAccount" })
  adminAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleStatus" })
  roleStatus?: AccountRoleStatusEnum;
}
