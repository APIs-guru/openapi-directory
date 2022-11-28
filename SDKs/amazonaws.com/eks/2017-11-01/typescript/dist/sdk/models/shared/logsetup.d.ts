import { SpeakeasyBase } from "../../../internal/utils";
import { LogTypeEnum } from "./logtypeenum";
/**
 * An object representing the enabled or disabled Kubernetes control plane logs for your cluster.
**/
export declare class LogSetup extends SpeakeasyBase {
    enabled?: boolean;
    types?: LogTypeEnum[];
}
