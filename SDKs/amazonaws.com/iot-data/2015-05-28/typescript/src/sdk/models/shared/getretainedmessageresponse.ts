import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRetainedMessageResponse
/** 
 * The output from the GetRetainedMessage operation.
**/
export class GetRetainedMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: number;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=qos" })
  qos?: number;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
