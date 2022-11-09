import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceAttribute } from "./resourceattribute";


export class PutResourceAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @Metadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;

  @Metadata({ data: "json, name=ResourceAttributeList", elemType: shared.ResourceAttribute })
  resourceAttributeList: ResourceAttribute[];
}
