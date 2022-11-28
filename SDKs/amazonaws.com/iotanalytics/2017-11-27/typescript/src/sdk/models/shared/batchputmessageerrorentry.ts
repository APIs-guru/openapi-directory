import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchPutMessageErrorEntry
/** 
 * Contains informations about errors.
**/
export class BatchPutMessageErrorEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;
}
