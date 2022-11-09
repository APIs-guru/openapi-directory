import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProgressUpdateStreamRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=ProgressUpdateStreamName" })
  progressUpdateStreamName: string;
}
