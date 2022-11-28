import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummary } from "./functionsummary";



export class PublishFunctionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  functionSummary?: FunctionSummary;
}
