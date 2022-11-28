import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpEndpointCommonAttribute
/** 
 * Describes the metadata that's delivered to the specified HTTP endpoint destination.
**/
export class HttpEndpointCommonAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeValue" })
  attributeValue: string;
}
