import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpEndpointCommonAttribute
/** 
 * Describes the metadata that's delivered to the specified HTTP endpoint destination.
**/
export class HttpEndpointCommonAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=AttributeValue" })
  attributeValue: string;
}
