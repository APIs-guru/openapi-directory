import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobExecutionStatusDetails
/** 
 * Details of the job execution status.
**/
export class JobExecutionStatusDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=detailsMap" })
  detailsMap?: Map<string, string>;
}
