import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidForwardCookies
/** 
 * Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.
**/
export class InvalidForwardCookies extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
