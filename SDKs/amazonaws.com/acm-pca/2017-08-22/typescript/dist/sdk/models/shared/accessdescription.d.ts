import { SpeakeasyBase } from "../../../internal/utils";
import { GeneralName } from "./generalname";
import { AccessMethod } from "./accessmethod";
/**
 * Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>.
**/
export declare class AccessDescription extends SpeakeasyBase {
    accessLocation: GeneralName;
    accessMethod: AccessMethod;
}
