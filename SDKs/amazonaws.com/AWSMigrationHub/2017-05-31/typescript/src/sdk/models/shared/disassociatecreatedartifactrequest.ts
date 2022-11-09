import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateCreatedArtifactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedArtifactName" })
  createdArtifactName: string;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @Metadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
