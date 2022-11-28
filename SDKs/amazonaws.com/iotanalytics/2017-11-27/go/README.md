# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchPutMessageRequest{
        Headers: operations.BatchPutMessageHeaders{
            XAmzAlgorithm: "possimus",
            XAmzContentSha256: "cumque",
            XAmzCredential: "odit",
            XAmzDate: "tempore",
            XAmzSecurityToken: "maiores",
            XAmzSignature: "dignissimos",
            XAmzSignedHeaders: "eaque",
        },
        Request: operations.BatchPutMessageRequestBody{
            ChannelName: "voluptatum",
            Messages: []shared.Message{
                shared.Message{
                    MessageID: "corporis",
                    Payload: "quas",
                },
            },
        },
    }
    
    res, err := s.Sdk.BatchPutMessage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMessageResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchPutMessage` - Sends messages to a channel.
* `CancelPipelineReprocessing` - Cancels the reprocessing of data through the pipeline.
* `CreateChannel` - Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
* `CreateDataset` - Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
* `CreateDatasetContent` - Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
* `CreateDatastore` - Creates a data store, which is a repository for messages.
* `CreatePipeline` - Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
* `DeleteChannel` - Deletes the specified channel.
* `DeleteDataset` - <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
* `DeleteDatasetContent` - Deletes the content of the specified dataset.
* `DeleteDatastore` - Deletes the specified data store.
* `DeletePipeline` - Deletes the specified pipeline.
* `DescribeChannel` - Retrieves information about a channel.
* `DescribeDataset` - Retrieves information about a dataset.
* `DescribeDatastore` - Retrieves information about a data store.
* `DescribeLoggingOptions` - Retrieves the current settings of the IoT Analytics logging options.
* `DescribePipeline` - Retrieves information about a pipeline.
* `GetDatasetContent` - Retrieves the contents of a dataset as presigned URIs.
* `ListChannels` - Retrieves a list of channels.
* `ListDatasetContents` - Lists information about dataset contents that have been created.
* `ListDatasets` - Retrieves information about datasets.
* `ListDatastores` - Retrieves a list of data stores.
* `ListPipelines` - Retrieves a list of pipelines.
* `ListTagsForResource` - Lists the tags (metadata) that you have assigned to the resource.
* `PutLoggingOptions` - <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
* `RunPipelineActivity` - Simulates the results of running a pipeline activity on a message payload.
* `SampleChannelData` - Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
* `StartPipelineReprocessing` - Starts the reprocessing of raw message data through the pipeline.
* `TagResource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `UntagResource` - Removes the given tags (metadata) from the resource.
* `UpdateChannel` - Used to update the settings of a channel.
* `UpdateDataset` - Updates the settings of a dataset.
* `UpdateDatastore` - Used to update the settings of a data store.
* `UpdatePipeline` - Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
