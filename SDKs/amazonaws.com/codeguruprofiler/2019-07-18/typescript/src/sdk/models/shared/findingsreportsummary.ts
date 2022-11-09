import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FindingsReportSummary
/** 
 *  Information about potential recommendations that might be created from the analysis of profiling data. 
**/
export class FindingsReportSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=profileEndTime" })
  profileEndTime?: Date;

  @Metadata({ data: "json, name=profileStartTime" })
  profileStartTime?: Date;

  @Metadata({ data: "json, name=profilingGroupName" })
  profilingGroupName?: string;

  @Metadata({ data: "json, name=totalNumberOfFindings" })
  totalNumberOfFindings?: number;
}
