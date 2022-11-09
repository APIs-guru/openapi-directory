import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnalyticsMetadataType
/** 
 * <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note>
**/
export class AnalyticsMetadataType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalyticsEndpointId" })
  analyticsEndpointId?: string;
}
