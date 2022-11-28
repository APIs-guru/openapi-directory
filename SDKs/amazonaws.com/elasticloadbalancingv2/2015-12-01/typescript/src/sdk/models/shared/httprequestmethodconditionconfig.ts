import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRequestMethodConditionConfig
/** 
 * <p>Information about an HTTP method condition.</p> <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>. You can also define custom HTTP methods.</p>
**/
export class HttpRequestMethodConditionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  values?: string[];
}
