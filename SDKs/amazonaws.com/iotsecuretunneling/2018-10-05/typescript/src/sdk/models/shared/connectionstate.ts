import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";



// ConnectionState
/** 
 * The state of a connection.
**/
export class ConnectionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConnectionStatusEnum;
}
