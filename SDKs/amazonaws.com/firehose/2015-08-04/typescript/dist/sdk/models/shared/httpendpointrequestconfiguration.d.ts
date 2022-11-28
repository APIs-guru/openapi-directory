import { SpeakeasyBase } from "../../../internal/utils";
import { HttpEndpointCommonAttribute } from "./httpendpointcommonattribute";
import { ContentEncodingEnum } from "./contentencodingenum";
/**
 * The configuration of the HTTP endpoint request.
**/
export declare class HttpEndpointRequestConfiguration extends SpeakeasyBase {
    commonAttributes?: HttpEndpointCommonAttribute[];
    contentEncoding?: ContentEncodingEnum;
}
