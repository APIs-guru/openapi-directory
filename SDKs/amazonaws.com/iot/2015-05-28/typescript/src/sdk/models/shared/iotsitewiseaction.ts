import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PutAssetPropertyValueEntry } from "./putassetpropertyvalueentry";



// IotSiteWiseAction
/** 
 * Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties.
**/
export class IotSiteWiseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=putAssetPropertyValueEntries", elemType: PutAssetPropertyValueEntry })
  putAssetPropertyValueEntries: PutAssetPropertyValueEntry[];

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
