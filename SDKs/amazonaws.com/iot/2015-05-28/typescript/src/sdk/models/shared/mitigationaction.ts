import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MitigationActionParams } from "./mitigationactionparams";


// MitigationAction
/** 
 * Describes which changes should be applied as part of a mitigation action.
**/
export class MitigationAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionParams" })
  actionParams?: MitigationActionParams;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
