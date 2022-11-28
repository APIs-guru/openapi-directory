import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpAuthorization } from "./httpauthorization";
import { HttpActionHeader } from "./httpactionheader";



// HttpAction
/** 
 * Send data to an HTTPS endpoint.
**/
export class HttpAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth" })
  auth?: HttpAuthorization;

  @SpeakeasyMetadata({ data: "json, name=confirmationUrl" })
  confirmationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: HttpActionHeader })
  headers?: HttpActionHeader[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
