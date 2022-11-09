import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MarketoSourceProperties } from "./marketosourceproperties";
import { S3SourceProperties } from "./s3sourceproperties";
import { SalesforceSourceProperties } from "./salesforcesourceproperties";
import { ServiceNowSourceProperties } from "./servicenowsourceproperties";
import { ZendeskSourceProperties } from "./zendesksourceproperties";


// SourceConnectorProperties
/** 
 * Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.
**/
export class SourceConnectorProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marketo" })
  marketo?: MarketoSourceProperties;

  @Metadata({ data: "json, name=S3" })
  s3?: S3SourceProperties;

  @Metadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceSourceProperties;

  @Metadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowSourceProperties;

  @Metadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskSourceProperties;
}
