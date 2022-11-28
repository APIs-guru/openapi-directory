import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpHeaderConditionConfig
/** 
 * <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
**/
export class HttpHeaderConditionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  httpHeaderName?: string;

  @SpeakeasyMetadata()
  values?: string[];
}
