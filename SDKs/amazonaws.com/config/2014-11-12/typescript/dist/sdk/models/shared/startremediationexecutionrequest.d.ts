import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceKey } from "./resourcekey";
export declare class StartRemediationExecutionRequest extends SpeakeasyBase {
    configRuleName: string;
    resourceKeys: ResourceKey[];
}
