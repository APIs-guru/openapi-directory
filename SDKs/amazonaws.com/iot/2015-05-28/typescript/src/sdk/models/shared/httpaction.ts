import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpAuthorization } from "./httpauthorization";
import { HttpActionHeader } from "./httpactionheader";


// HttpAction
/** 
 * Send data to an HTTPS endpoint.
**/
export class HttpAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: HttpAuthorization;

  @Metadata({ data: "json, name=confirmationUrl" })
  confirmationUrl?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.HttpActionHeader })
  headers?: HttpActionHeader[];

  @Metadata({ data: "json, name=url" })
  url: string;
}
