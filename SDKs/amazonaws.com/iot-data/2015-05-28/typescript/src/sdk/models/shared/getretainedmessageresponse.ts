import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRetainedMessageResponse
/** 
 * The output from the GetRetainedMessage operation.
**/
export class GetRetainedMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: number;

  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=qos" })
  qos?: number;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
