import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportWithRawData
/** 
 * Contains the unmodified data for the report. For more information, see .
**/
export class ReportWithRawData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=reportArn" })
  reportArn?: string;
}
