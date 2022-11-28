import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
export declare class GetConnectionsResponse extends SpeakeasyBase {
    connectionList?: Connection[];
    nextToken?: string;
}
