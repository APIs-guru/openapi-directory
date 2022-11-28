import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateAccessLogsResult
/** 
 *  The result structure for the generate access logs request. 
**/
export class GenerateAccessLogsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logUrl" })
  logUrl?: string;
}
