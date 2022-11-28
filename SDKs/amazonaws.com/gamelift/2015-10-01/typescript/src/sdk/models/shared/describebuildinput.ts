import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeBuildInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeBuildInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildId" })
  buildId: string;
}
