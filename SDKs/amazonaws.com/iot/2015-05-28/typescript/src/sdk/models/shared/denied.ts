import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExplicitDeny } from "./explicitdeny";
import { ImplicitDeny } from "./implicitdeny";


// Denied
/** 
 * Contains information that denied the authorization.
**/
export class Denied extends SpeakeasyBase {
  @Metadata({ data: "json, name=explicitDeny" })
  explicitDeny?: ExplicitDeny;

  @Metadata({ data: "json, name=implicitDeny" })
  implicitDeny?: ImplicitDeny;
}
