import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateProjectRequest
/** 
 * Represents a request to the create project operation.
**/
export class CreateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultJobTimeoutMinutes" })
  defaultJobTimeoutMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
