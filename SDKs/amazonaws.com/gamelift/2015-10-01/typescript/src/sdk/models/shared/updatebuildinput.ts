import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateBuildInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateBuildInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildId" })
  buildId: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
