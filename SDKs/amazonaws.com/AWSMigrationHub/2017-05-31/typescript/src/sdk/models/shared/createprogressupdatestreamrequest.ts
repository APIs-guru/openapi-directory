import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProgressUpdateStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStreamName" })
  progressUpdateStreamName: string;
}
