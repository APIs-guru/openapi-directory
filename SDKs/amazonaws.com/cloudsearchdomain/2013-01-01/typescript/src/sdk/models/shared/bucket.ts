import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Bucket
/** 
 * A container for facet information. 
**/
export class Bucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
