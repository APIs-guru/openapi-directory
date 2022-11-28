import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidRequiredProtocol
/** 
 * This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration.
**/
export class InvalidRequiredProtocol extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
