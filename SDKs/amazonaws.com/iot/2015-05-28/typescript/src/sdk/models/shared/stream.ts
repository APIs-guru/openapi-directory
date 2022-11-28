import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Stream
/** 
 * Describes a group of files that can be streamed.
**/
export class Stream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: number;

  @SpeakeasyMetadata({ data: "json, name=streamId" })
  streamId?: string;
}
