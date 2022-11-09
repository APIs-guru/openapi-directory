import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpEndpointCommonAttribute } from "./httpendpointcommonattribute";
import { ContentEncodingEnum } from "./contentencodingenum";


// HttpEndpointRequestConfiguration
/** 
 * The configuration of the HTTP endpoint request.
**/
export class HttpEndpointRequestConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommonAttributes", elemType: shared.HttpEndpointCommonAttribute })
  commonAttributes?: HttpEndpointCommonAttribute[];

  @Metadata({ data: "json, name=ContentEncoding" })
  contentEncoding?: ContentEncodingEnum;
}
