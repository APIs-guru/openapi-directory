import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyComplianceStatus } from "./policycompliancestatus";



export class ListComplianceStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyComplianceStatusList", elemType: PolicyComplianceStatus })
  policyComplianceStatusList?: PolicyComplianceStatus[];
}
