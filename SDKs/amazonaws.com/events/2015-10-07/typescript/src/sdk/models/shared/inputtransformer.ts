import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputTransformer
/** 
 * Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
**/
export class InputTransformer extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputPathsMap" })
  inputPathsMap?: Map<string, string>;

  @Metadata({ data: "json, name=InputTemplate" })
  inputTemplate: string;
}
