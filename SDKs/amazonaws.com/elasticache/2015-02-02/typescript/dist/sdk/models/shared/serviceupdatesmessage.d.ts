import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdate } from "./serviceupdate";
export declare class ServiceUpdatesMessage extends SpeakeasyBase {
    marker?: string;
    serviceUpdates?: ServiceUpdate[];
}
