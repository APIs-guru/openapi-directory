import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BlobMetadata
/** 
 * Returns information about a specific Git blob object.
**/
export class BlobMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobId" })
  blobId?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
