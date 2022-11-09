import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Configuration settings of a canary deployment.
**/
export declare class CanarySettings extends SpeakeasyBase {
    deploymentId?: string;
    percentTraffic?: number;
    stageVariableOverrides?: Map<string, string>;
    useStageCache?: boolean;
}
