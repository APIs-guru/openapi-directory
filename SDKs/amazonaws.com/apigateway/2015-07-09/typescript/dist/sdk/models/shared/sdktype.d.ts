import { SpeakeasyBase } from "../../../internal/utils";
import { SDKConfigurationProperty } from "./sdkconfigurationproperty";
/**
 * A type of SDK that API Gateway can generate.
**/
export declare class SDKType extends SpeakeasyBase {
    configurationProperties?: SDKConfigurationProperty[];
    description?: string;
    friendlyName?: string;
    id?: string;
}
