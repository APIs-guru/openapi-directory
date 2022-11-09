import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionExecutionResult } from "./actionexecutionresult";
import { ArtifactDetail } from "./artifactdetail";


// ActionExecutionOutput
/** 
 * Output details listed for an action execution, such as the action execution result.
**/
export class ActionExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionResult" })
  executionResult?: ActionExecutionResult;

  @Metadata({ data: "json, name=outputArtifacts", elemType: shared.ArtifactDetail })
  outputArtifacts?: ArtifactDetail[];

  @Metadata({ data: "json, name=outputVariables" })
  outputVariables?: Map<string, string>;
}
