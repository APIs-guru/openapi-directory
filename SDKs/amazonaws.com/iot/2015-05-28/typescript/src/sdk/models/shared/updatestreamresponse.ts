import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateStreamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=streamArn" })
  streamArn?: string;

  @Metadata({ data: "json, name=streamId" })
  streamId?: string;

  @Metadata({ data: "json, name=streamVersion" })
  streamVersion?: number;
}
