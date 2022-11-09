import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateDiscoveredResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationId" })
  configurationId: string;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @Metadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
