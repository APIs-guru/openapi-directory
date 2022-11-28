import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetadataEndpointStateEnum } from "./instancemetadataendpointstateenum";
import { InstanceMetadataProtocolStateEnum } from "./instancemetadataprotocolstateenum";
import { HttpTokensStateEnum } from "./httptokensstateenum";
import { InstanceMetadataOptionsStateEnum } from "./instancemetadataoptionsstateenum";



// InstanceMetadataOptionsResponse
/** 
 * The metadata options for the instance.
**/
export class InstanceMetadataOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  httpEndpoint?: InstanceMetadataEndpointStateEnum;

  @SpeakeasyMetadata()
  httpProtocolIpv6?: InstanceMetadataProtocolStateEnum;

  @SpeakeasyMetadata()
  httpPutResponseHopLimit?: number;

  @SpeakeasyMetadata()
  httpTokens?: HttpTokensStateEnum;

  @SpeakeasyMetadata()
  state?: InstanceMetadataOptionsStateEnum;
}
