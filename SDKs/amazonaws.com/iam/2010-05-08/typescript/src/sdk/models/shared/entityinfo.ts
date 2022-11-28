import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyOwnerEntityTypeEnum } from "./policyownerentitytypeenum";



// EntityInfo
/** 
 * <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
**/
export class EntityInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  type: PolicyOwnerEntityTypeEnum;
}
