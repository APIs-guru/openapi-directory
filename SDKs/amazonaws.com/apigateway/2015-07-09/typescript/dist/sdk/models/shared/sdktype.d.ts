import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SdkConfigurationProperty } from "./sdkconfigurationproperty";
/**
 * A type of SDK that API Gateway can generate.
**/
export declare class SdkType extends SpeakeasyBase {
    configurationProperties?: SdkConfigurationProperty[];
    description?: string;
    friendlyName?: string;
    id?: string;
}
