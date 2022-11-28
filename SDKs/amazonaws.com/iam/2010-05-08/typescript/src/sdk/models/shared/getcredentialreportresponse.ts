import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFormatTypeEnum } from "./reportformattypeenum";



// GetCredentialReportResponse
/** 
 * Contains the response to a successful <a>GetCredentialReport</a> request. 
**/
export class GetCredentialReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  content?: string;

  @SpeakeasyMetadata()
  generatedTime?: Date;

  @SpeakeasyMetadata()
  reportFormat?: ReportFormatTypeEnum;
}
