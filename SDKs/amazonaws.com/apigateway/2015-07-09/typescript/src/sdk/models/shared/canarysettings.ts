import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CanarySettings
/** 
 * Configuration settings of a canary deployment.
**/
export class CanarySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=percentTraffic" })
  percentTraffic?: number;

  @SpeakeasyMetadata({ data: "json, name=stageVariableOverrides" })
  stageVariableOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=useStageCache" })
  useStageCache?: boolean;
}
