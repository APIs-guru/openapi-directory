import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorInfo
/** 
 *  Provides details in the event of a failed flow, including the failure count and the related error messages. 
**/
export class ErrorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionMessage" })
  executionMessage?: string;

  @Metadata({ data: "json, name=putFailuresCount" })
  putFailuresCount?: number;
}
