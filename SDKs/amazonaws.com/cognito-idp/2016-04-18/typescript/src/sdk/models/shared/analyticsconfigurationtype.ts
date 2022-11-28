import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnalyticsConfigurationType
/** 
 * <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1. In regions where Pinpoint is available, Cognito User Pools will support sending events to Amazon Pinpoint projects within that same region. </p> </note>
**/
export class AnalyticsConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationArn" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=UserDataShared" })
  userDataShared?: boolean;
}
