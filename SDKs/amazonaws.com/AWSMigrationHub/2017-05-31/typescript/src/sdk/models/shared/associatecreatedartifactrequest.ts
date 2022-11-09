import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreatedArtifact } from "./createdartifact";


export class AssociateCreatedArtifactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedArtifact" })
  createdArtifact: CreatedArtifact;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @Metadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
