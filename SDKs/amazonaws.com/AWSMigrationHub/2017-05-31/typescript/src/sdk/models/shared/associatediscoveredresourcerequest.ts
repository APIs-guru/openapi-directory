import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiscoveredResource } from "./discoveredresource";



export class AssociateDiscoveredResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DiscoveredResource" })
  discoveredResource: DiscoveredResource;

  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
