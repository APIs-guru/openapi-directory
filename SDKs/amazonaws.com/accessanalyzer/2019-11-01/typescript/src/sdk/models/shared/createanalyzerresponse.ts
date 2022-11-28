import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateAnalyzerResponse
/** 
 * The response to the request to create an analyzer.
**/
export class CreateAnalyzerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;
}
