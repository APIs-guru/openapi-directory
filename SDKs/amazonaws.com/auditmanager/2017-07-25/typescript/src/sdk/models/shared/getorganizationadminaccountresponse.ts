import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationAdminAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminAccountId" })
  adminAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}
