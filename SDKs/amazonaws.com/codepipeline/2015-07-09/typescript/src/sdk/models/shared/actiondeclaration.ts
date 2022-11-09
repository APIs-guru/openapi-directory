import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionTypeId } from "./actiontypeid";
import { InputArtifact } from "./inputartifact";
import { OutputArtifact } from "./outputartifact";


// ActionDeclaration
/** 
 * Represents information about an action declaration.
**/
export class ActionDeclaration extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionTypeId" })
  actionTypeId: ActionTypeId;

  @Metadata({ data: "json, name=configuration" })
  configuration?: Map<string, string>;

  @Metadata({ data: "json, name=inputArtifacts", elemType: shared.InputArtifact })
  inputArtifacts?: InputArtifact[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=outputArtifacts", elemType: shared.OutputArtifact })
  outputArtifacts?: OutputArtifact[];

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=runOrder" })
  runOrder?: number;
}
