import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamFile } from "./streamfile";



// StreamInfo
/** 
 * Information about a stream.
**/
export class StreamInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: StreamFile })
  files?: StreamFile[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=streamArn" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=streamId" })
  streamId?: string;

  @SpeakeasyMetadata({ data: "json, name=streamVersion" })
  streamVersion?: number;
}
