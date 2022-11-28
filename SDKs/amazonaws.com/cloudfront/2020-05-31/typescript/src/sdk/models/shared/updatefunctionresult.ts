import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummary } from "./functionsummary";



export class UpdateFunctionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  functionSummary?: FunctionSummary;
}
