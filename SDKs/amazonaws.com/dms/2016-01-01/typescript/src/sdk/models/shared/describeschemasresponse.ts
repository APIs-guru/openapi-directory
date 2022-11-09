import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeSchemasResponse
/** 
 * <p/>
**/
export class DescribeSchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=Schemas" })
  schemas?: string[];
}
