import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";



// ApplicationState
/** 
 * The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent.
**/
export class ApplicationState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationStatus" })
  applicationStatus?: ApplicationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;
}
