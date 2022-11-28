import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummary } from "./functionsummary";



// TestResult
/** 
 * Contains the result of testing a CloudFront function with <code>TestFunction</code>.
**/
export class TestResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  computeUtilization?: string;

  @SpeakeasyMetadata()
  functionErrorMessage?: string;

  @SpeakeasyMetadata()
  functionExecutionLogs?: string[];

  @SpeakeasyMetadata()
  functionOutput?: string;

  @SpeakeasyMetadata()
  functionSummary?: FunctionSummary;
}
