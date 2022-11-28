import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionResult } from "./actionexecutionresult";
import { ArtifactDetail } from "./artifactdetail";



// ActionExecutionOutput
/** 
 * Output details listed for an action execution, such as the action execution result.
**/
export class ActionExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionResult" })
  executionResult?: ActionExecutionResult;

  @SpeakeasyMetadata({ data: "json, name=outputArtifacts", elemType: ArtifactDetail })
  outputArtifacts?: ArtifactDetail[];

  @SpeakeasyMetadata({ data: "json, name=outputVariables" })
  outputVariables?: Map<string, string>;
}
