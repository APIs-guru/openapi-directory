import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * An arbitary key/value pair used to add searchable metadata to secure tunnel resources.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
