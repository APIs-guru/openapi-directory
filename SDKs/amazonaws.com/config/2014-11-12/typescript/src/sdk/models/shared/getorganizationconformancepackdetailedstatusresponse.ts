import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrganizationConformancePackDetailedStatus } from "./organizationconformancepackdetailedstatus";


export class GetOrganizationConformancePackDetailedStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OrganizationConformancePackDetailedStatuses", elemType: shared.OrganizationConformancePackDetailedStatus })
  organizationConformancePackDetailedStatuses?: OrganizationConformancePackDetailedStatus[];
}
