import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeGenNodeArg
/** 
 * An argument or property of a node.
**/
export class CodeGenNodeArg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Param" })
  param?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
