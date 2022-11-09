import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountRoleStatusEnum } from "./accountrolestatusenum";


export class GetAdminAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminAccount" })
  adminAccount?: string;

  @Metadata({ data: "json, name=RoleStatus" })
  roleStatus?: AccountRoleStatusEnum;
}
