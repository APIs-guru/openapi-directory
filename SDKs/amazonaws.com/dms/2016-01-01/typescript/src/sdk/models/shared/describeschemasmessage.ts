import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeSchemasMessage
/** 
 * <p/>
**/
export class DescribeSchemasMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;
}
