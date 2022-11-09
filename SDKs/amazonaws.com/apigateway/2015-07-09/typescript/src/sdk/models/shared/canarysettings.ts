import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CanarySettings
/** 
 * Configuration settings of a canary deployment.
**/
export class CanarySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=percentTraffic" })
  percentTraffic?: number;

  @Metadata({ data: "json, name=stageVariableOverrides" })
  stageVariableOverrides?: Map<string, string>;

  @Metadata({ data: "json, name=useStageCache" })
  useStageCache?: boolean;
}
