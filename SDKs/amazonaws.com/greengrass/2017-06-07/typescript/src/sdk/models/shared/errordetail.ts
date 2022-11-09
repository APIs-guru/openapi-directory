import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorDetail
/** 
 * Details about the error.
**/
export class ErrorDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=DetailedErrorCode" })
  detailedErrorCode?: string;

  @Metadata({ data: "json, name=DetailedErrorMessage" })
  detailedErrorMessage?: string;
}
