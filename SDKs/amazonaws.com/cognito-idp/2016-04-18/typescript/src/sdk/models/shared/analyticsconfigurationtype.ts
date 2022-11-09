import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnalyticsConfigurationType
/** 
 * <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1. In regions where Pinpoint is available, Cognito User Pools will support sending events to Amazon Pinpoint projects within that same region. </p> </note>
**/
export class AnalyticsConfigurationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationArn" })
  applicationArn?: string;

  @Metadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=UserDataShared" })
  userDataShared?: boolean;
}
