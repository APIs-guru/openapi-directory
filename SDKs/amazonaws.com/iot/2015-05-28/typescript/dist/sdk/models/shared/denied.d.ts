import { SpeakeasyBase } from "../../../internal/utils";
import { ExplicitDeny } from "./explicitdeny";
import { ImplicitDeny } from "./implicitdeny";
/**
 * Contains information that denied the authorization.
**/
export declare class Denied extends SpeakeasyBase {
    explicitDeny?: ExplicitDeny;
    implicitDeny?: ImplicitDeny;
}
