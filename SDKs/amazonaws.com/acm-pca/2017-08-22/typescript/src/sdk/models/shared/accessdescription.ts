import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeneralName } from "./generalname";
import { AccessMethod } from "./accessmethod";


// AccessDescription
/** 
 * Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>.
**/
export class AccessDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessLocation" })
  accessLocation: GeneralName;

  @Metadata({ data: "json, name=AccessMethod" })
  accessMethod: AccessMethod;
}
