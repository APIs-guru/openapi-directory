import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateBuildInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateBuildInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildId" })
  buildId: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
