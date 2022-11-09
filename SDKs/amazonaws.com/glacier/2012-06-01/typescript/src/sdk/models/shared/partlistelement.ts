import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PartListElement
/** 
 * A list of the part sizes of the multipart upload.
**/
export class PartListElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=RangeInBytes" })
  rangeInBytes?: string;

  @Metadata({ data: "json, name=SHA256TreeHash" })
  sha256TreeHash?: string;
}
