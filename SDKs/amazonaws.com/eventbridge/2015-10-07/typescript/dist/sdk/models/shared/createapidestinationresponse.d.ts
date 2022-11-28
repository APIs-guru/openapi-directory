import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDestinationStateEnum } from "./apidestinationstateenum";
export declare class CreateApiDestinationResponse extends SpeakeasyBase {
    apiDestinationArn?: string;
    apiDestinationState?: ApiDestinationStateEnum;
    creationTime?: Date;
    lastModifiedTime?: Date;
}
