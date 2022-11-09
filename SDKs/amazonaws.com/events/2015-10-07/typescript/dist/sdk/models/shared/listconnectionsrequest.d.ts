import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionStateEnum } from "./connectionstateenum";
export declare class ListConnectionsRequest extends SpeakeasyBase {
    connectionState?: ConnectionStateEnum;
    limit?: number;
    namePrefix?: string;
    nextToken?: string;
}
