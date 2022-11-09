import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";
/**
 * An item in a list of <code>Config</code> objects.
**/
export declare class ConfigListItem extends SpeakeasyBase {
    configArn?: string;
    configId?: string;
    configType?: ConfigCapabilityTypeEnum;
    name?: string;
}
