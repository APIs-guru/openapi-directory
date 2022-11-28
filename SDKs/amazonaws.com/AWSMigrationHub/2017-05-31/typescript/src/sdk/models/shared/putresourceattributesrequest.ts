import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceAttribute } from "./resourceattribute";



export class PutResourceAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceAttributeList", elemType: ResourceAttribute })
  resourceAttributeList: ResourceAttribute[];
}
