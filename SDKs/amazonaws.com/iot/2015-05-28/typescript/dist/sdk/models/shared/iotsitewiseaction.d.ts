import { SpeakeasyBase } from "../../../internal/utils";
import { PutAssetPropertyValueEntry } from "./putassetpropertyvalueentry";
/**
 * Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties.
**/
export declare class IotSiteWiseAction extends SpeakeasyBase {
    putAssetPropertyValueEntries: PutAssetPropertyValueEntry[];
    roleArn: string;
}
