import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IotEventsAction
/** 
 * Sends an input to an IoT Events detector.
**/
export class IotEventsAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchMode" })
  batchMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inputName" })
  inputName: string;

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
