import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceKey } from "./resourcekey";



export class StartRemediationExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceKeys", elemType: ResourceKey })
  resourceKeys: ResourceKey[];
}
