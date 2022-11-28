import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationResourceDetailedStatusFilters } from "./organizationresourcedetailedstatusfilters";



export class GetOrganizationConformancePackDetailedStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: OrganizationResourceDetailedStatusFilters;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackName" })
  organizationConformancePackName: string;
}
