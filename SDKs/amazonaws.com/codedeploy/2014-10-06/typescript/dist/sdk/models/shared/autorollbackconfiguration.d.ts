import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRollbackEventEnum } from "./autorollbackeventenum";
/**
 * Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.
**/
export declare class AutoRollbackConfiguration extends SpeakeasyBase {
    enabled?: boolean;
    events?: AutoRollbackEventEnum[];
}
