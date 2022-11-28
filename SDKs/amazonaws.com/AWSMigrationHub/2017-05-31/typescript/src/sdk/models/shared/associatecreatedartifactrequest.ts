import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreatedArtifact } from "./createdartifact";



export class AssociateCreatedArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedArtifact" })
  createdArtifact: CreatedArtifact;

  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
