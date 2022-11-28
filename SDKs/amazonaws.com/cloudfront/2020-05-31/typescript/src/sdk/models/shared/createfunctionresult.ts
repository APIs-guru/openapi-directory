import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummary } from "./functionsummary";



export class CreateFunctionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  functionSummary?: FunctionSummary;
}
