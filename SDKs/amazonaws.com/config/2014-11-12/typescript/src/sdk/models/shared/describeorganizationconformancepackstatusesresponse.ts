import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrganizationConformancePackStatus } from "./organizationconformancepackstatus";


export class DescribeOrganizationConformancePackStatusesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OrganizationConformancePackStatuses", elemType: shared.OrganizationConformancePackStatus })
  organizationConformancePackStatuses?: OrganizationConformancePackStatus[];
}
