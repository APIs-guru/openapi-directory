import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeSchemasResponse
/** 
 * <p/>
**/
export class DescribeSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=Schemas" })
  schemas?: string[];
}
