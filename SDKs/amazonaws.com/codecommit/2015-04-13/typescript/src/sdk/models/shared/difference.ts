import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlobMetadata } from "./blobmetadata";
import { ChangeTypeEnumEnum } from "./changetypeenumenum";



// Difference
/** 
 * Returns information about a set of differences for a commit specifier.
**/
export class Difference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=afterBlob" })
  afterBlob?: BlobMetadata;

  @SpeakeasyMetadata({ data: "json, name=beforeBlob" })
  beforeBlob?: BlobMetadata;

  @SpeakeasyMetadata({ data: "json, name=changeType" })
  changeType?: ChangeTypeEnumEnum;
}
