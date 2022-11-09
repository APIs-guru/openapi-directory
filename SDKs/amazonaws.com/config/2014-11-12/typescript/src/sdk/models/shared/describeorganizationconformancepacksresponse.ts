import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrganizationConformancePack } from "./organizationconformancepack";


export class DescribeOrganizationConformancePacksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OrganizationConformancePacks", elemType: shared.OrganizationConformancePack })
  organizationConformancePacks?: OrganizationConformancePack[];
}
