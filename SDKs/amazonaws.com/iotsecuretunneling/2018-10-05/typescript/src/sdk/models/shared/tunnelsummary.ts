import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TunnelStatusEnum } from "./tunnelstatusenum";



// TunnelSummary
/** 
 * Information about the tunnel.
**/
export class TunnelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TunnelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tunnelArn" })
  tunnelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=tunnelId" })
  tunnelId?: string;
}
