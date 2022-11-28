import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProgressUpdateStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStreamName" })
  progressUpdateStreamName: string;
}
