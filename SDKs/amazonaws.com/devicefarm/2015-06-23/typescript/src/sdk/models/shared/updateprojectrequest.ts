import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateProjectRequest
/** 
 * Represents a request to the update project operation.
**/
export class UpdateProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=defaultJobTimeoutMinutes" })
  defaultJobTimeoutMinutes?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
