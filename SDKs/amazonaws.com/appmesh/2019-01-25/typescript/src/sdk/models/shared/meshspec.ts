import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EgressFilter } from "./egressfilter";


// MeshSpec
/** 
 * An object that represents the specification of a service mesh.
**/
export class MeshSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=egressFilter" })
  egressFilter?: EgressFilter;
}
