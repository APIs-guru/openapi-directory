import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CustomerProfiles" })
  customerProfiles?: CustomerProfilesDestinationProperties;

  @Metadata({ data: "json, name=EventBridge" })
  eventBridge?: EventBridgeDestinationProperties;

  @Metadata({ data: "json, name=Honeycode" })
  honeycode?: HoneycodeDestinationProperties;

  @Metadata({ data: "json, name=LookoutMetrics" })
  lookoutMetrics?: Map<string, any>;

  @Metadata({ data: "json, name=Redshift" })
  redshift?: RedshiftDestinationProperties;

  @Metadata({ data: "json, name=S3" })
  s3?: S3DestinationProperties;

  @Metadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceDestinationProperties;

  @Metadata({ data: "json, name=Snowflake" })
  snowflake?: SnowflakeDestinationProperties;

  @Metadata({ data: "json, name=Upsolver" })
  upsolver?: UpsolverDestinationProperties;

  @Metadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskDestinationProperties;
}
