import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


// Step
/** 
 *  Describes an execution step, for an execution job, for an Amplify app. 
**/
export class Step extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactsUrl" })
  artifactsUrl?: string;

  @Metadata({ data: "json, name=context" })
  context?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=logUrl" })
  logUrl?: string;

  @Metadata({ data: "json, name=screenshots" })
  screenshots?: Map<string, string>;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=status" })
  status: JobStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=stepName" })
  stepName: string;

  @Metadata({ data: "json, name=testArtifactsUrl" })
  testArtifactsUrl?: string;

  @Metadata({ data: "json, name=testConfigUrl" })
  testConfigUrl?: string;
}
