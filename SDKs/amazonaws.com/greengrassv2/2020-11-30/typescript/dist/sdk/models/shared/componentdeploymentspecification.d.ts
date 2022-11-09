import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComponentConfigurationUpdate } from "./componentconfigurationupdate";
import { ComponentRunWith } from "./componentrunwith";
/**
 * Contains information about a component to deploy.
**/
export declare class ComponentDeploymentSpecification extends SpeakeasyBase {
    componentVersion?: string;
    configurationUpdate?: ComponentConfigurationUpdate;
    runWith?: ComponentRunWith;
}
