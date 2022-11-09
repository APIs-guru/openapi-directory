import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Stream
/** 
 * Describes a group of files that can be streamed.
**/
export class Stream extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileId" })
  fileId?: number;

  @Metadata({ data: "json, name=streamId" })
  streamId?: string;
}
