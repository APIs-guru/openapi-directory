import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StageContext
/** 
 * Represents information about a stage to a job worker.
**/
export class StageContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
