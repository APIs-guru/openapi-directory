import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Session
/** 
 * The details of the execute command session.
**/
export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=streamUrl" })
  streamUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenValue" })
  tokenValue?: string;
}
