import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionsList
/** 
 * Specifies the connections used by a job.
**/
export class ConnectionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Connections" })
  connections?: string[];
}
