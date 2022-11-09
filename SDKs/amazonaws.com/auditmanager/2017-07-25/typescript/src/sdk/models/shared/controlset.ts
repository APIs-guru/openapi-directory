import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Control } from "./control";


// ControlSet
/** 
 *  A set of controls in Audit Manager. 
**/
export class ControlSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=controls", elemType: shared.Control })
  controls?: Control[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
