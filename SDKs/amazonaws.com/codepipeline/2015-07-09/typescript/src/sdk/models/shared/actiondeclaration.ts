import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeId } from "./actiontypeid";
import { InputArtifact } from "./inputartifact";
import { OutputArtifact } from "./outputartifact";



// ActionDeclaration
/** 
 * Represents information about an action declaration.
**/
export class ActionDeclaration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionTypeId" })
  actionTypeId: ActionTypeId;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=inputArtifacts", elemType: InputArtifact })
  inputArtifacts?: InputArtifact[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=outputArtifacts", elemType: OutputArtifact })
  outputArtifacts?: OutputArtifact[];

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=runOrder" })
  runOrder?: number;
}
