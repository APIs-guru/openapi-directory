import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorInfo
/** 
 *  Provides details in the event of a failed flow, including the failure count and the related error messages. 
**/
export class ErrorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionMessage" })
  executionMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=putFailuresCount" })
  putFailuresCount?: number;
}
