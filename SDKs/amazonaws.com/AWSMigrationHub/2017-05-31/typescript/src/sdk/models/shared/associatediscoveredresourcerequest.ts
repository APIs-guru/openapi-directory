import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DiscoveredResource } from "./discoveredresource";


export class AssociateDiscoveredResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DiscoveredResource" })
  discoveredResource: DiscoveredResource;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @Metadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
