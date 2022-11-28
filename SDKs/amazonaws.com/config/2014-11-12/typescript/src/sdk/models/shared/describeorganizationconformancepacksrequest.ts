import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeOrganizationConformancePacksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackNames" })
  organizationConformancePackNames?: string[];
}
