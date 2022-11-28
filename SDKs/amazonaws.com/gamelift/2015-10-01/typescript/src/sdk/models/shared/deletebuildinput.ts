import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteBuildInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteBuildInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildId" })
  buildId: string;
}
