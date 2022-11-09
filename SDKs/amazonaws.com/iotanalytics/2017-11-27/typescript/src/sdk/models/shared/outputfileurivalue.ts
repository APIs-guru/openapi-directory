import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputFileUriValue
/** 
 * The value of the variable as a structure that specifies an output file URI.
**/
export class OutputFileUriValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileName" })
  fileName: string;
}
