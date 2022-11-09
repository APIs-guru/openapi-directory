import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateProjectRequest
/** 
 * Represents a request to the create project operation.
**/
export class CreateProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultJobTimeoutMinutes" })
  defaultJobTimeoutMinutes?: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}
