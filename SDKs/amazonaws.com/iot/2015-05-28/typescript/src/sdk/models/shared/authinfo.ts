import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTypeEnum } from "./actiontypeenum";


// AuthInfo
/** 
 * A collection of authorization information.
**/
export class AuthInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionType" })
  actionType?: ActionTypeEnum;

  @Metadata({ data: "json, name=resources" })
  resources: string[];
}
