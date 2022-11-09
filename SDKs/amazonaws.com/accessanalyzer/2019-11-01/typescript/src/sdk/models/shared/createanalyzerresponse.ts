import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateAnalyzerResponse
/** 
 * The response to the request to create an analyzer.
**/
export class CreateAnalyzerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;
}
