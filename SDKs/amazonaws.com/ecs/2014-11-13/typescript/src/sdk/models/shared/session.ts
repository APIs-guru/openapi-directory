import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Session
/** 
 * The details of the execute command session.
**/
export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=streamUrl" })
  streamUrl?: string;

  @Metadata({ data: "json, name=tokenValue" })
  tokenValue?: string;
}
