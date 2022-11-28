import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlueprintRunStateEnum } from "./blueprintrunstateenum";



// BlueprintRun
/** 
 * The details of a blueprint run.
**/
export class BlueprintRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintName" })
  blueprintName?: string;

  @SpeakeasyMetadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RollbackErrorMessage" })
  rollbackErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: BlueprintRunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=WorkflowName" })
  workflowName?: string;
}
