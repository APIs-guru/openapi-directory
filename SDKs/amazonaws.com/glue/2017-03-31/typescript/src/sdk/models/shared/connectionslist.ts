import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionsList
/** 
 * Specifies the connections used by a job.
**/
export class ConnectionsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=Connections" })
  connections?: string[];
}
