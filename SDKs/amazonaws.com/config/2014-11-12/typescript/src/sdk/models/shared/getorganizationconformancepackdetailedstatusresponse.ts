import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConformancePackDetailedStatus } from "./organizationconformancepackdetailedstatus";



export class GetOrganizationConformancePackDetailedStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackDetailedStatuses", elemType: OrganizationConformancePackDetailedStatus })
  organizationConformancePackDetailedStatuses?: OrganizationConformancePackDetailedStatus[];
}
