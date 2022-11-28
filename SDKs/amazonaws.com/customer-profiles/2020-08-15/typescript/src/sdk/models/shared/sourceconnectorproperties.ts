import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Marketo" })
  marketo?: MarketoSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=S3" })
  s3?: S3SourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskSourceProperties;
}
