import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PutAssetPropertyValueEntry } from "./putassetpropertyvalueentry";


// IotSiteWiseAction
/** 
 * Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties.
**/
export class IotSiteWiseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=putAssetPropertyValueEntries", elemType: shared.PutAssetPropertyValueEntry })
  putAssetPropertyValueEntries: PutAssetPropertyValueEntry[];

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
