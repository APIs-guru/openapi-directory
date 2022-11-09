import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Identity } from "./identity";
export declare class GetConnectionResponse extends SpeakeasyBase {
    connectedAt?: Date;
    identity?: Identity;
    lastActiveAt?: Date;
}
