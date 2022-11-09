import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Sample } from "./sample";


// ListSamplesResult
/** 
 * Represents the result of a list samples request.
**/
export class ListSamplesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=samples", elemType: shared.Sample })
  samples?: Sample[];
}
