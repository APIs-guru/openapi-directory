import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerProfilesDestinationProperties } from "./customerprofilesdestinationproperties";
import { EventBridgeDestinationProperties } from "./eventbridgedestinationproperties";
import { HoneycodeDestinationProperties } from "./honeycodedestinationproperties";
import { RedshiftDestinationProperties } from "./redshiftdestinationproperties";
import { S3DestinationProperties } from "./s3destinationproperties";
import { SalesforceDestinationProperties } from "./salesforcedestinationproperties";
import { SnowflakeDestinationProperties } from "./snowflakedestinationproperties";
import { UpsolverDestinationProperties } from "./upsolverdestinationproperties";
import { ZendeskDestinationProperties } from "./zendeskdestinationproperties";



// DestinationConnectorProperties
/** 
 *  This stores the information that is required to query a particular connector. 
**/
export class DestinationConnectorProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomerProfiles" })
  customerProfiles?: CustomerProfilesDestinationProperties;

  @SpeakeasyMetadata({ data: "json, name=EventBridge" })
  eventBridge?: EventBridgeDestinationProperties;

  @SpeakeasyMetadata({ data: "json, name=Honeycode" })
  honeycode?: HoneycodeDestinationProperties;

  @SpeakeasyMetadata({ data: "json, name=LookoutMetrics" })
  lookoutMetrics?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Redshift" })
  redshift?: RedshiftDestinationProperties;

  @SpeakeasyMetadata({ data: "json, name=S3" })
  s3?: S3DestinationProperties;

  @SpeakeasyMetadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceDestinationProperties;

  @SpeakeasyMetadata({ data: "json, name=Snowflake" })
  snowflake?: SnowflakeDestinationProperties;

  @SpeakeasyMetadata({ data: "json, name=Upsolver" })
  upsolver?: UpsolverDestinationProperties;

  @SpeakeasyMetadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskDestinationProperties;
}
