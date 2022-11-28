import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";
export declare class ListConnectionsRequest extends SpeakeasyBase {
    connectionState?: ConnectionStateEnum;
    limit?: number;
    namePrefix?: string;
    nextToken?: string;
}
