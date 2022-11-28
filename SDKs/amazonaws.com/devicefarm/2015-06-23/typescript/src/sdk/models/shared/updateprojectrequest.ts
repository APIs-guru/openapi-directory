import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateProjectRequest
/** 
 * Represents a request to the update project operation.
**/
export class UpdateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=defaultJobTimeoutMinutes" })
  defaultJobTimeoutMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
