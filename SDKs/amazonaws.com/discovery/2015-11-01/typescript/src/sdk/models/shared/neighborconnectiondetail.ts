import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NeighborConnectionDetail
/** 
 * Details about neighboring servers.
**/
export class NeighborConnectionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionsCount" })
  connectionsCount: number;

  @SpeakeasyMetadata({ data: "json, name=destinationPort" })
  destinationPort?: number;

  @SpeakeasyMetadata({ data: "json, name=destinationServerId" })
  destinationServerId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceServerId" })
  sourceServerId: string;

  @SpeakeasyMetadata({ data: "json, name=transportProtocol" })
  transportProtocol?: string;
}
