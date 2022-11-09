import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtifactStore } from "./artifactstore";
import { ArtifactStore } from "./artifactstore";
import { StageDeclaration } from "./stagedeclaration";


// PipelineDeclaration
/** 
 * Represents the structure of actions and stages to be performed in the pipeline.
**/
export class PipelineDeclaration extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactStore" })
  artifactStore?: ArtifactStore;

  @Metadata({ data: "json, name=artifactStores", elemType: shared.ArtifactStore })
  artifactStores?: Map<string, ArtifactStore>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=stages", elemType: shared.StageDeclaration })
  stages: StageDeclaration[];

  @Metadata({ data: "json, name=version" })
  version?: number;
}
