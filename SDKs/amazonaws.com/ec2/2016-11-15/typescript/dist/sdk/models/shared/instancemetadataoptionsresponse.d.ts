import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetadataEndpointStateEnum } from "./instancemetadataendpointstateenum";
import { InstanceMetadataProtocolStateEnum } from "./instancemetadataprotocolstateenum";
import { HttpTokensStateEnum } from "./httptokensstateenum";
import { InstanceMetadataOptionsStateEnum } from "./instancemetadataoptionsstateenum";
/**
 * The metadata options for the instance.
**/
export declare class InstanceMetadataOptionsResponse extends SpeakeasyBase {
    httpEndpoint?: InstanceMetadataEndpointStateEnum;
    httpProtocolIpv6?: InstanceMetadataProtocolStateEnum;
    httpPutResponseHopLimit?: number;
    httpTokens?: HttpTokensStateEnum;
    state?: InstanceMetadataOptionsStateEnum;
}
