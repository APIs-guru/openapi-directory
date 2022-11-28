import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";
export declare class DeleteConnectionResponse extends SpeakeasyBase {
    connectionArn?: string;
    connectionState?: ConnectionStateEnum;
    creationTime?: Date;
    lastAuthorizedTime?: Date;
    lastModifiedTime?: Date;
}
