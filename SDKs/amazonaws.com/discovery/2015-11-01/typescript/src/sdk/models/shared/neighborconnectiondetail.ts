import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NeighborConnectionDetail
/** 
 * Details about neighboring servers.
**/
export class NeighborConnectionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionsCount" })
  connectionsCount: number;

  @Metadata({ data: "json, name=destinationPort" })
  destinationPort?: number;

  @Metadata({ data: "json, name=destinationServerId" })
  destinationServerId: string;

  @Metadata({ data: "json, name=sourceServerId" })
  sourceServerId: string;

  @Metadata({ data: "json, name=transportProtocol" })
  transportProtocol?: string;
}
