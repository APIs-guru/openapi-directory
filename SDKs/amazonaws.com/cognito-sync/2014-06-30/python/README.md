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
    
req = operations.BulkPublishRequest(
    path_params=operations.BulkPublishPathParams(
        identity_pool_id="recusandae",
    ),
    headers=operations.BulkPublishHeaders(
        x_amz_algorithm="asperiores",
        x_amz_content_sha256="quas",
        x_amz_credential="repellendus",
        x_amz_date="deleniti",
        x_amz_security_token="corporis",
        x_amz_signature="voluptas",
        x_amz_signed_headers="architecto",
    ),
)
    
res = s.sdk.bulk_publish(req)

if res.bulk_publish_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `bulk_publish` - <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* `delete_dataset` - <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
* `describe_dataset` - <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
* `describe_identity_pool_usage` - <p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* `describe_identity_usage` - <p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
* `get_bulk_publish_details` - <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* `get_cognito_events` - <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* `get_identity_pool_configuration` - <p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* `list_datasets` - <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>
* `list_identity_pool_usage` - <p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>
* `list_records` - <p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
* `register_device` - <p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* `set_cognito_events` - <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* `set_identity_pool_configuration` - <p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* `subscribe_to_dataset` - <p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* `unsubscribe_from_dataset` - <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* `update_records` - <p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
