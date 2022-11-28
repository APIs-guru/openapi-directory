import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sample } from "./sample";



// ListSamplesResult
/** 
 * Represents the result of a list samples request.
**/
export class ListSamplesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=samples", elemType: Sample })
  samples?: Sample[];
}
