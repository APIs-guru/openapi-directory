import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationAdminAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminAccountId" })
  adminAccountId?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}
