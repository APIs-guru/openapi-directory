import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConformancePackStatus } from "./organizationconformancepackstatus";



export class DescribeOrganizationConformancePackStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackStatuses", elemType: OrganizationConformancePackStatus })
  organizationConformancePackStatuses?: OrganizationConformancePackStatus[];
}
