import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StreamSummary
/** 
 * A summary of a stream.
**/
export class StreamSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=streamArn" })
  streamArn?: string;

  @Metadata({ data: "json, name=streamId" })
  streamId?: string;

  @Metadata({ data: "json, name=streamVersion" })
  streamVersion?: number;
}
