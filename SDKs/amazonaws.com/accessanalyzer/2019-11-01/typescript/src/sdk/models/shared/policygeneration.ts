import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



// PolicyGeneration
/** 
 * Contains details about the policy generation status and properties.
**/
export class PolicyGeneration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedOn" })
  completedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=principalArn" })
  principalArn: string;

  @SpeakeasyMetadata({ data: "json, name=startedOn" })
  startedOn: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: JobStatusEnum;
}
