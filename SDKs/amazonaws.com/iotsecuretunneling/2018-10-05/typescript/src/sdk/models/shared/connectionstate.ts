import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";


// ConnectionState
/** 
 * The state of a connection.
**/
export class ConnectionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ConnectionStatusEnum;
}
