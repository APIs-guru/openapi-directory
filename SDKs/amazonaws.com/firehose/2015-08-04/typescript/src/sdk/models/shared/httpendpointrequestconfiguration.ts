import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpEndpointCommonAttribute } from "./httpendpointcommonattribute";
import { ContentEncodingEnum } from "./contentencodingenum";



// HttpEndpointRequestConfiguration
/** 
 * The configuration of the HTTP endpoint request.
**/
export class HttpEndpointRequestConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommonAttributes", elemType: HttpEndpointCommonAttribute })
  commonAttributes?: HttpEndpointCommonAttribute[];

  @SpeakeasyMetadata({ data: "json, name=ContentEncoding" })
  contentEncoding?: ContentEncodingEnum;
}
