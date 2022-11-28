import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerProfilesDestinationProperties } from "./customerprofilesdestinationproperties";
import { EventBridgeDestinationProperties } from "./eventbridgedestinationproperties";
import { HoneycodeDestinationProperties } from "./honeycodedestinationproperties";
import { RedshiftDestinationProperties } from "./redshiftdestinationproperties";
import { S3DestinationProperties } from "./s3destinationproperties";
import { SalesforceDestinationProperties } from "./salesforcedestinationproperties";
import { SnowflakeDestinationProperties } from "./snowflakedestinationproperties";
import { UpsolverDestinationProperties } from "./upsolverdestinationproperties";
import { ZendeskDestinationProperties } from "./zendeskdestinationproperties";
/**
 *  This stores the information that is required to query a particular connector.
**/
export declare class DestinationConnectorProperties extends SpeakeasyBase {
    customerProfiles?: CustomerProfilesDestinationProperties;
    eventBridge?: EventBridgeDestinationProperties;
    honeycode?: HoneycodeDestinationProperties;
    lookoutMetrics?: Map<string, any>;
    redshift?: RedshiftDestinationProperties;
    s3?: S3DestinationProperties;
    salesforce?: SalesforceDestinationProperties;
    snowflake?: SnowflakeDestinationProperties;
    upsolver?: UpsolverDestinationProperties;
    zendesk?: ZendeskDestinationProperties;
}
