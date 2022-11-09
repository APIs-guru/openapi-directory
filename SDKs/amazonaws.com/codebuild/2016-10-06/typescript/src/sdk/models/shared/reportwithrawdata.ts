import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportWithRawData
/** 
 * Contains the unmodified data for the report. For more information, see .
**/
export class ReportWithRawData extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=reportArn" })
  reportArn?: string;
}
