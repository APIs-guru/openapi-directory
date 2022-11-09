import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionStateEnum } from "./connectionstateenum";
export declare class UpdateConnectionResponse extends SpeakeasyBase {
    connectionArn?: string;
    connectionState?: ConnectionStateEnum;
    creationTime?: Date;
    lastAuthorizedTime?: Date;
    lastModifiedTime?: Date;
}
