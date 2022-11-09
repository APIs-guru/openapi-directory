import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Project
/** 
 * Represents an operating-system neutral workspace for running and managing tests.
**/
export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=defaultJobTimeoutMinutes" })
  defaultJobTimeoutMinutes?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
