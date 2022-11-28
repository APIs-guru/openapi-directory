# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AssociateConfigurationItemsToApplicationRequest, AssociateConfigurationItemsToApplicationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateConfigurationItemsToApplicationRequest = {
  headers: {
    xAmzAlgorithm: "ab",
    xAmzContentSha256: "dolores",
    xAmzCredential: "sunt",
    xAmzDate: "perferendis",
    xAmzSecurityToken: "quas",
    xAmzSignature: "aut",
    xAmzSignedHeaders: "dicta",
    xAmzTarget: "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
  },
  request: {
    applicationConfigurationId: "pariatur",
    configurationIds: [
      "ducimus",
    ],
  },
};

sdk.sdk.associateConfigurationItemsToApplication(req).then((res: AssociateConfigurationItemsToApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateConfigurationItemsToApplication` - Associates one or more configuration items with an application.
* `batchDeleteImportData` - <p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>AWS Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>
* `createApplication` - Creates an application with the given name and description.
* `createTags` - Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
* `deleteApplications` - Deletes a list of applications and their associations with configuration items.
* `deleteTags` - Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
* `describeAgents` - Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.
* `describeConfigurations` - <p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> </note>
* `describeContinuousExports` - Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.
* `describeExportConfigurations` -  <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeImportTasks</a>, instead.
* `describeExportTasks` - Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
* `describeImportTasks` - Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
* `describeTags` - <p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
* `disassociateConfigurationItemsFromApplication` - Disassociates one or more configuration items from an application.
* `exportConfigurations` - <p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>
* `getDiscoverySummary` - <p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>
* `listConfigurations` - Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.
* `listServerNeighbors` - Retrieves a list of servers that are one network hop away from a specified server.
* `startContinuousExport` - Start the continuous flow of agent's discovered data into Amazon Athena.
* `startDataCollectionByAgentIds` - Instructs the specified agents or connectors to start collecting data.
* `startExportTask` - <p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both AWS Agentless Discovery Connector data and summary data from AWS Discovery Agents. Export of summary data is limited to two exports per day. </p>
* `startImportTask` - <p>Starts an import task, which allows you to import details of your on-premises environment directly into AWS Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the AWS CLI or one of the AWS SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an AWS account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">AWS Application Discovery Service Limits</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> </note>
* `stopContinuousExport` - Stop the continuous flow of agent's discovered data into Amazon Athena.
* `stopDataCollectionByAgentIds` - Instructs the specified agents or connectors to stop collecting data.
* `updateApplication` - Updates metadata about an application.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
