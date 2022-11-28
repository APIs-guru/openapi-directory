import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobExecutionStatusDetails
/** 
 * Details of the job execution status.
**/
export class JobExecutionStatusDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailsMap" })
  detailsMap?: Map<string, string>;
}
