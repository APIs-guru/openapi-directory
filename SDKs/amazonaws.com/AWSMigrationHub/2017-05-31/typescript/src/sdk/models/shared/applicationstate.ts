import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";


// ApplicationState
/** 
 * The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent.
**/
export class ApplicationState extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @Metadata({ data: "json, name=ApplicationStatus" })
  applicationStatus?: ApplicationStatusEnum;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;
}
