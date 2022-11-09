import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


// GetJobResult
/** 
 * Represents the result of a get job request.
**/
export class GetJobResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job?: Job;
}
