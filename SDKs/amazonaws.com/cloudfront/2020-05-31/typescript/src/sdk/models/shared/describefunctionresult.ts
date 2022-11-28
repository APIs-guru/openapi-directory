import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummary } from "./functionsummary";



export class DescribeFunctionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  functionSummary?: FunctionSummary;
}
