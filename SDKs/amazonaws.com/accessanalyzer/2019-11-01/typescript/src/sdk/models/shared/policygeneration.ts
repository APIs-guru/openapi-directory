import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


// PolicyGeneration
/** 
 * Contains details about the policy generation status and properties.
**/
export class PolicyGeneration extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedOn" })
  completedOn?: Date;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=principalArn" })
  principalArn: string;

  @Metadata({ data: "json, name=startedOn" })
  startedOn: Date;

  @Metadata({ data: "json, name=status" })
  status: JobStatusEnum;
}
