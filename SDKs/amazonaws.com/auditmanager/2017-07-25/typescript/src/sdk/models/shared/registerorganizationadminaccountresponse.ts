import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterOrganizationAdminAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminAccountId" })
  adminAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}
