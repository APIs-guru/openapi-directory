import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FindingsReportSummary
/** 
 *  Information about potential recommendations that might be created from the analysis of profiling data. 
**/
export class FindingsReportSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=profileEndTime" })
  profileEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=profileStartTime" })
  profileStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=profilingGroupName" })
  profilingGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=totalNumberOfFindings" })
  totalNumberOfFindings?: number;
}
