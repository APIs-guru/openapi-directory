import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1. In regions where Pinpoint is available, Cognito User Pools will support sending events to Amazon Pinpoint projects within that same region. </p> </note>
**/
export declare class AnalyticsConfigurationType extends SpeakeasyBase {
    applicationArn?: string;
    applicationId?: string;
    externalId?: string;
    roleArn?: string;
    userDataShared?: boolean;
}
