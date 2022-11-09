import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeBuildInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeBuildInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildId" })
  buildId: string;
}
