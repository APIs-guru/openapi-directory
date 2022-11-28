import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateCreatedArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedArtifactName" })
  createdArtifactName: string;

  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
