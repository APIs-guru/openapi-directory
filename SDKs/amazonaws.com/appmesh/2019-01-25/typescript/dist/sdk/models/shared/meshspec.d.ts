import { SpeakeasyBase } from "../../../internal/utils";
import { EgressFilter } from "./egressfilter";
/**
 * An object that represents the specification of a service mesh.
**/
export declare class MeshSpec extends SpeakeasyBase {
    egressFilter?: EgressFilter;
}
