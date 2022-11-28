import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BlobMetadata
/** 
 * Returns information about a specific Git blob object.
**/
export class BlobMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobId" })
  blobId?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
