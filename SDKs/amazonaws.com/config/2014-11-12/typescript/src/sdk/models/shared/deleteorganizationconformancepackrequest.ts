import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationConformancePackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationConformancePackName" })
  organizationConformancePackName: string;
}
