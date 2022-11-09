import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionTypeId } from "./actiontypeid";
import { ArtifactDetail } from "./artifactdetail";


// ActionExecutionInput
/** 
 * Input information used for an action execution.
**/
export class ActionExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionTypeId" })
  actionTypeId?: ActionTypeId;

  @Metadata({ data: "json, name=configuration" })
  configuration?: Map<string, string>;

  @Metadata({ data: "json, name=inputArtifacts", elemType: shared.ArtifactDetail })
  inputArtifacts?: ArtifactDetail[];

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=resolvedConfiguration" })
  resolvedConfiguration?: Map<string, string>;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
