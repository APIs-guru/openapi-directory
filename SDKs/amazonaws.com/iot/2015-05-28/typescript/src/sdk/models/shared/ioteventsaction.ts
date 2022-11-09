import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IotEventsAction
/** 
 * Sends an input to an IoT Events detector.
**/
export class IotEventsAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchMode" })
  batchMode?: boolean;

  @Metadata({ data: "json, name=inputName" })
  inputName: string;

  @Metadata({ data: "json, name=messageId" })
  messageId?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
