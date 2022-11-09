import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteBuildInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteBuildInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildId" })
  buildId: string;
}
