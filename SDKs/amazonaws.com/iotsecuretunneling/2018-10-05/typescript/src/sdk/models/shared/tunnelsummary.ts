import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TunnelStatusEnum } from "./tunnelstatusenum";


// TunnelSummary
/** 
 * Information about the tunnel.
**/
export class TunnelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: TunnelStatusEnum;

  @Metadata({ data: "json, name=tunnelArn" })
  tunnelArn?: string;

  @Metadata({ data: "json, name=tunnelId" })
  tunnelId?: string;
}
