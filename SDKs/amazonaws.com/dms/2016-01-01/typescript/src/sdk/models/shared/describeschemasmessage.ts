import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeSchemasMessage
/** 
 * <p/>
**/
export class DescribeSchemasMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;
}
