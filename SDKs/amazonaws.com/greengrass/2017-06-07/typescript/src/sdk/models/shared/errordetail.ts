import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorDetail
/** 
 * Details about the error.
**/
export class ErrorDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DetailedErrorCode" })
  detailedErrorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=DetailedErrorMessage" })
  detailedErrorMessage?: string;
}
