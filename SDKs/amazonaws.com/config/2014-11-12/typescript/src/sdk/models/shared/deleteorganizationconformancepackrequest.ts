import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrganizationConformancePackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackName" })
  organizationConformancePackName: string;
}
