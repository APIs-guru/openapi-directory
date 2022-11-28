import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EgressFilter } from "./egressfilter";



// MeshSpec
/** 
 * An object that represents the specification of a service mesh.
**/
export class MeshSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=egressFilter" })
  egressFilter?: EgressFilter;
}
