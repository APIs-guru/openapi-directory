import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfig } from "./destinationconfig";
import { ConnectionState } from "./connectionstate";
import { TunnelStatusEnum } from "./tunnelstatusenum";
import { Tag } from "./tag";
import { TimeoutConfig } from "./timeoutconfig";



// Tunnel
/** 
 * A connection between a source computer and a destination device.
**/
export class Tunnel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationConfig" })
  destinationConfig?: DestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=destinationConnectionState" })
  destinationConnectionState?: ConnectionState;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceConnectionState" })
  sourceConnectionState?: ConnectionState;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TunnelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: TimeoutConfig;

  @SpeakeasyMetadata({ data: "json, name=tunnelArn" })
  tunnelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=tunnelId" })
  tunnelId?: string;
}
