import { SpeakeasyBase } from "../../../internal/utils";
import { MarketoSourceProperties } from "./marketosourceproperties";
import { S3SourceProperties } from "./s3sourceproperties";
import { SalesforceSourceProperties } from "./salesforcesourceproperties";
import { ServiceNowSourceProperties } from "./servicenowsourceproperties";
import { ZendeskSourceProperties } from "./zendesksourceproperties";
/**
 * Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.
**/
export declare class SourceConnectorProperties extends SpeakeasyBase {
    marketo?: MarketoSourceProperties;
    s3?: S3SourceProperties;
    salesforce?: SalesforceSourceProperties;
    serviceNow?: ServiceNowSourceProperties;
    zendesk?: ZendeskSourceProperties;
}
