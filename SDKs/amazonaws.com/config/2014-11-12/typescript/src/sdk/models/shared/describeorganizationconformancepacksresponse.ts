import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConformancePack } from "./organizationconformancepack";



export class DescribeOrganizationConformancePacksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePacks", elemType: OrganizationConformancePack })
  organizationConformancePacks?: OrganizationConformancePack[];
}
