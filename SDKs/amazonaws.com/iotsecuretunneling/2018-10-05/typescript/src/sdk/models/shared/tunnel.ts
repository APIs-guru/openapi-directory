import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationConfig } from "./destinationconfig";
import { ConnectionState } from "./connectionstate";
import { ConnectionState } from "./connectionstate";
import { TunnelStatusEnum } from "./tunnelstatusenum";
import { Tag } from "./tag";
import { TimeoutConfig } from "./timeoutconfig";


// Tunnel
/** 
 * A connection between a source computer and a destination device.
**/
export class Tunnel extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationConfig" })
  destinationConfig?: DestinationConfig;

  @Metadata({ data: "json, name=destinationConnectionState" })
  destinationConnectionState?: ConnectionState;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=sourceConnectionState" })
  sourceConnectionState?: ConnectionState;

  @Metadata({ data: "json, name=status" })
  status?: TunnelStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: TimeoutConfig;

  @Metadata({ data: "json, name=tunnelArn" })
  tunnelArn?: string;

  @Metadata({ data: "json, name=tunnelId" })
  tunnelId?: string;
}
