import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlobMetadata } from "./blobmetadata";
import { BlobMetadata } from "./blobmetadata";
import { ChangeTypeEnumEnum } from "./changetypeenumenum";


// Difference
/** 
 * Returns information about a set of differences for a commit specifier.
**/
export class Difference extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterBlob" })
  afterBlob?: BlobMetadata;

  @Metadata({ data: "json, name=beforeBlob" })
  beforeBlob?: BlobMetadata;

  @Metadata({ data: "json, name=changeType" })
  changeType?: ChangeTypeEnumEnum;
}
