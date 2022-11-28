import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputTransformer
/** 
 * Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
**/
export class InputTransformer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputPathsMap" })
  inputPathsMap?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=InputTemplate" })
  inputTemplate: string;
}
