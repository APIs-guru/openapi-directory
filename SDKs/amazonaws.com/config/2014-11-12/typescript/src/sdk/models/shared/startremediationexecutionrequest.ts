import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceKey } from "./resourcekey";


export class StartRemediationExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @Metadata({ data: "json, name=ResourceKeys", elemType: shared.ResourceKey })
  resourceKeys: ResourceKey[];
}
