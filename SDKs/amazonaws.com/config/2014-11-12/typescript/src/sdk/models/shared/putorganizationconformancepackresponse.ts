import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutOrganizationConformancePackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackArn" })
  organizationConformancePackArn?: string;
}
