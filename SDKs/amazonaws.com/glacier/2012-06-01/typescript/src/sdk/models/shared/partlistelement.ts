import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PartListElement
/** 
 * A list of the part sizes of the multipart upload.
**/
export class PartListElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RangeInBytes" })
  rangeInBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=SHA256TreeHash" })
  sha256TreeHash?: string;
}
