import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";



// AuthInfo
/** 
 * A collection of authorization information.
**/
export class AuthInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: ActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources: string[];
}
