import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiDestinationStateEnum } from "./apidestinationstateenum";
export declare class UpdateApiDestinationResponse extends SpeakeasyBase {
    apiDestinationArn?: string;
    apiDestinationState?: ApiDestinationStateEnum;
    creationTime?: Date;
    lastModifiedTime?: Date;
}
