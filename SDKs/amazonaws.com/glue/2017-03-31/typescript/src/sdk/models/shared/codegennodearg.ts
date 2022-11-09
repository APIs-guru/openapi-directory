import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeGenNodeArg
/** 
 * An argument or property of a node.
**/
export class CodeGenNodeArg extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Param" })
  param?: boolean;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
