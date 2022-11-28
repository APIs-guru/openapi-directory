import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MitigationActionParams } from "./mitigationactionparams";



// MitigationAction
/** 
 * Describes which changes should be applied as part of a mitigation action.
**/
export class MitigationAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionParams" })
  actionParams?: MitigationActionParams;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
