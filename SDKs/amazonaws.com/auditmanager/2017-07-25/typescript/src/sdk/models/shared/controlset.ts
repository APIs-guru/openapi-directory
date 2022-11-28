import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Control } from "./control";



// ControlSet
/** 
 *  A set of controls in Audit Manager. 
**/
export class ControlSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controls", elemType: Control })
  controls?: Control[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
