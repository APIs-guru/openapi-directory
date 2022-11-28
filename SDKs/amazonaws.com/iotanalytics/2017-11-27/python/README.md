# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BatchPutMessageRequest(
    headers=operations.BatchPutMessageHeaders(
        x_amz_algorithm="possimus",
        x_amz_content_sha256="cumque",
        x_amz_credential="odit",
        x_amz_date="tempore",
        x_amz_security_token="maiores",
        x_amz_signature="dignissimos",
        x_amz_signed_headers="eaque",
    ),
    request=operations.BatchPutMessageRequestBody(
        channel_name="voluptatum",
        messages=[
            shared.Message(
                message_id="corporis",
                payload="quas",
            ),
        ],
    ),
)
    
res = s.sdk.batch_put_message(req)

if res.batch_put_message_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_put_message` - Sends messages to a channel.
* `cancel_pipeline_reprocessing` - Cancels the reprocessing of data through the pipeline.
* `create_channel` - Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
* `create_dataset` - Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
* `create_dataset_content` - Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
* `create_datastore` - Creates a data store, which is a repository for messages.
* `create_pipeline` - Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
* `delete_channel` - Deletes the specified channel.
* `delete_dataset` - <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
* `delete_dataset_content` - Deletes the content of the specified dataset.
* `delete_datastore` - Deletes the specified data store.
* `delete_pipeline` - Deletes the specified pipeline.
* `describe_channel` - Retrieves information about a channel.
* `describe_dataset` - Retrieves information about a dataset.
* `describe_datastore` - Retrieves information about a data store.
* `describe_logging_options` - Retrieves the current settings of the IoT Analytics logging options.
* `describe_pipeline` - Retrieves information about a pipeline.
* `get_dataset_content` - Retrieves the contents of a dataset as presigned URIs.
* `list_channels` - Retrieves a list of channels.
* `list_dataset_contents` - Lists information about dataset contents that have been created.
* `list_datasets` - Retrieves information about datasets.
* `list_datastores` - Retrieves a list of data stores.
* `list_pipelines` - Retrieves a list of pipelines.
* `list_tags_for_resource` - Lists the tags (metadata) that you have assigned to the resource.
* `put_logging_options` - <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
* `run_pipeline_activity` - Simulates the results of running a pipeline activity on a message payload.
* `sample_channel_data` - Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
* `start_pipeline_reprocessing` - Starts the reprocessing of raw message data through the pipeline.
* `tag_resource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `untag_resource` - Removes the given tags (metadata) from the resource.
* `update_channel` - Used to update the settings of a channel.
* `update_dataset` - Updates the settings of a dataset.
* `update_datastore` - Used to update the settings of a data store.
* `update_pipeline` - Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
