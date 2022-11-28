import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceKey } from "./resourcekey";



export class DescribeRemediationExecutionStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceKeys", elemType: ResourceKey })
  resourceKeys?: ResourceKey[];
}
