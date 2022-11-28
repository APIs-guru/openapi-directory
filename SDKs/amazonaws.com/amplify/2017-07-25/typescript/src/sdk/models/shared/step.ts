import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



// Step
/** 
 *  Describes an execution step, for an execution job, for an Amplify app. 
**/
export class Step extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactsUrl" })
  artifactsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=logUrl" })
  logUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=screenshots" })
  screenshots?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=stepName" })
  stepName: string;

  @SpeakeasyMetadata({ data: "json, name=testArtifactsUrl" })
  testArtifactsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=testConfigUrl" })
  testConfigUrl?: string;
}
