import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStore } from "./artifactstore";
import { StageDeclaration } from "./stagedeclaration";



// PipelineDeclaration
/** 
 * Represents the structure of actions and stages to be performed in the pipeline.
**/
export class PipelineDeclaration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactStore" })
  artifactStore?: ArtifactStore;

  @SpeakeasyMetadata({ data: "json, name=artifactStores", elemType: ArtifactStore })
  artifactStores?: Map<string, ArtifactStore>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=stages", elemType: StageDeclaration })
  stages: StageDeclaration[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
