import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchPutMessageErrorEntry
/** 
 * Contains informations about errors.
**/
export class BatchPutMessageErrorEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=messageId" })
  messageId?: string;
}
