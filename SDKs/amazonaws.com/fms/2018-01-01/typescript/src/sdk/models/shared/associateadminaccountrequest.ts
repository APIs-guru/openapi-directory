import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateAdminAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminAccount" })
  adminAccount: string;
}
