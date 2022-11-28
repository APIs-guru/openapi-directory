import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Project
/** 
 * Represents an operating-system neutral workspace for running and managing tests.
**/
export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultJobTimeoutMinutes" })
  defaultJobTimeoutMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
