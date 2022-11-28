import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestResult } from "./testresult";



export class TestFunctionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  testResult?: TestResult;
}
