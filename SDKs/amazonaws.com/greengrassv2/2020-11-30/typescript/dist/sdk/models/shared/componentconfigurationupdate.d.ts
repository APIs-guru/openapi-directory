import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
**/
export declare class ComponentConfigurationUpdate extends SpeakeasyBase {
    merge?: string;
    reset?: string[];
}
