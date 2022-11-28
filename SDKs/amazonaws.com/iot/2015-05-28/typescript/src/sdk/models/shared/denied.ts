import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExplicitDeny } from "./explicitdeny";
import { ImplicitDeny } from "./implicitdeny";



// Denied
/** 
 * Contains information that denied the authorization.
**/
export class Denied extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explicitDeny" })
  explicitDeny?: ExplicitDeny;

  @SpeakeasyMetadata({ data: "json, name=implicitDeny" })
  implicitDeny?: ImplicitDeny;
}
