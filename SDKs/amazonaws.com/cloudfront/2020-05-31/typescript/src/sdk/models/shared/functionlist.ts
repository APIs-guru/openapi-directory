import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummary } from "./functionsummary";



// FunctionList
/** 
 * A list of CloudFront functions.
**/
export class FunctionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FunctionSummary })
  items?: FunctionSummary[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
