import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlueprintRunStateEnum } from "./blueprintrunstateenum";


// BlueprintRun
/** 
 * The details of a blueprint run.
**/
export class BlueprintRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintName" })
  blueprintName?: string;

  @Metadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=RollbackErrorMessage" })
  rollbackErrorMessage?: string;

  @Metadata({ data: "json, name=RunId" })
  runId?: string;

  @Metadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @Metadata({ data: "json, name=State" })
  state?: BlueprintRunStateEnum;

  @Metadata({ data: "json, name=WorkflowName" })
  workflowName?: string;
}
