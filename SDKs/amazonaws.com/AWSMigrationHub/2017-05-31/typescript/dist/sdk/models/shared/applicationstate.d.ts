import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";
/**
 * The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent.
**/
export declare class ApplicationState extends SpeakeasyBase {
    applicationId?: string;
    applicationStatus?: ApplicationStatusEnum;
    lastUpdatedTime?: Date;
}
