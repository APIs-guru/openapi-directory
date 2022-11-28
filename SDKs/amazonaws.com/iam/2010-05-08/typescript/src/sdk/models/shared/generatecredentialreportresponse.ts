import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportStateTypeEnum } from "./reportstatetypeenum";



// GenerateCredentialReportResponse
/** 
 * Contains the response to a successful <a>GenerateCredentialReport</a> request. 
**/
export class GenerateCredentialReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  state?: ReportStateTypeEnum;
}
