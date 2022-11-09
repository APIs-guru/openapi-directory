import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateAccessLogsResult
/** 
 *  The result structure for the generate access logs request. 
**/
export class GenerateAccessLogsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=logUrl" })
  logUrl?: string;
}
