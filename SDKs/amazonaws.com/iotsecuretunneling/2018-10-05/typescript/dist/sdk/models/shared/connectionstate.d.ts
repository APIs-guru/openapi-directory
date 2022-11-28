import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";
/**
 * The state of a connection.
**/
export declare class ConnectionState extends SpeakeasyBase {
    lastUpdatedAt?: Date;
    status?: ConnectionStatusEnum;
}
