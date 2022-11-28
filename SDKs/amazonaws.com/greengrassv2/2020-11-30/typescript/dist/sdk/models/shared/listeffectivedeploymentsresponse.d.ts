import { SpeakeasyBase } from "../../../internal/utils";
import { EffectiveDeployment } from "./effectivedeployment";
export declare class ListEffectiveDeploymentsResponse extends SpeakeasyBase {
    effectiveDeployments?: EffectiveDeployment[];
    nextToken?: string;
}
