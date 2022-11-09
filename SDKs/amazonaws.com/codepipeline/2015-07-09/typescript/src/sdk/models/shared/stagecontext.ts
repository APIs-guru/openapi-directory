import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StageContext
/** 
 * Represents information about a stage to a job worker.
**/
export class StageContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
