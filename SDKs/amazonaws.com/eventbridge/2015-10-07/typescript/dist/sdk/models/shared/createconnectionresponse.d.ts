import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";
export declare class CreateConnectionResponse extends SpeakeasyBase {
    connectionArn?: string;
    connectionState?: ConnectionStateEnum;
    creationTime?: Date;
    lastModifiedTime?: Date;
}
