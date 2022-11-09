import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamFile } from "./streamfile";


// StreamInfo
/** 
 * Information about a stream.
**/
export class StreamInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=files", elemType: shared.StreamFile })
  files?: StreamFile[];

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=streamArn" })
  streamArn?: string;

  @Metadata({ data: "json, name=streamId" })
  streamId?: string;

  @Metadata({ data: "json, name=streamVersion" })
  streamVersion?: number;
}
