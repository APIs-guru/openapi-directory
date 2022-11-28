import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Bucket
/** 
 * A container for facet information. 
**/
export class Bucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
