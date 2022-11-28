import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SDKConfigurationProperty } from "./sdkconfigurationproperty";



// SDKType
/** 
 * A type of SDK that API Gateway can generate.
**/
export class SDKType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationProperties", elemType: SDKConfigurationProperty })
  configurationProperties?: SDKConfigurationProperty[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
