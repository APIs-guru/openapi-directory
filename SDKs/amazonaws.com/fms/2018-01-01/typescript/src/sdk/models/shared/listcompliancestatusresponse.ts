import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyComplianceStatus } from "./policycompliancestatus";


export class ListComplianceStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PolicyComplianceStatusList", elemType: shared.PolicyComplianceStatus })
  policyComplianceStatusList?: PolicyComplianceStatus[];
}
