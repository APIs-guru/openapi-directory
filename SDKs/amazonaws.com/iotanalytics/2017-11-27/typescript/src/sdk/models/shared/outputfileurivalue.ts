import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputFileUriValue
/** 
 * The value of the variable as a structure that specifies an output file URI.
**/
export class OutputFileUriValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName: string;
}
