import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceBackend } from "./virtualservicebackend";
/**
 * An object that represents the backends that a virtual node is expected to send outbound traffic to.
**/
export declare class Backend extends SpeakeasyBase {
    virtualService?: VirtualServiceBackend;
}
