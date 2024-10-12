# GoogleCloudRetailV2alphaImportProductsRequest

Request message for Import methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors_config** | [**GoogleCloudRetailV2alphaImportErrorsConfig**](GoogleCloudRetailV2alphaImportErrorsConfig.md) |  | [optional] 
**input_config** | [**GoogleCloudRetailV2alphaProductInputConfig**](GoogleCloudRetailV2alphaProductInputConfig.md) |  | [optional] 
**notification_pubsub_topic** | **str** | Full Pub/Sub topic name for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is &#x60;projects/{project}/topics/{topic}&#x60;. It has to be within the same project as ImportProductsRequest.parent. Make sure that both &#x60;cloud-retail-customer-data-access@system.gserviceaccount.com&#x60; and &#x60;service-@gcp-sa-retail.iam.gserviceaccount.com&#x60; have the &#x60;pubsub.topics.publish&#x60; IAM permission on the topic. Only supported when ImportProductsRequest.reconciliation_mode is set to &#x60;FULL&#x60;. | [optional] 
**reconciliation_mode** | **str** | The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL. | [optional] 
**request_id** | **str** | Deprecated. This field has no effect. | [optional] 
**skip_default_branch_protection** | **bool** | If true, this performs the FULL import even if it would delete a large proportion of the products in the default branch, which could potentially cause outages if you have live predict/search traffic. Only supported when ImportProductsRequest.reconciliation_mode is set to &#x60;FULL&#x60;. | [optional] 
**update_mask** | **str** | Indicates which fields in the provided imported &#x60;products&#x60; to update. If not set, all fields are updated. If provided, only the existing product fields are updated. Missing products will not be created. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_import_products_request import GoogleCloudRetailV2alphaImportProductsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaImportProductsRequest from a JSON string
google_cloud_retail_v2alpha_import_products_request_instance = GoogleCloudRetailV2alphaImportProductsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaImportProductsRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_import_products_request_dict = google_cloud_retail_v2alpha_import_products_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaImportProductsRequest from a dict
google_cloud_retail_v2alpha_import_products_request_from_dict = GoogleCloudRetailV2alphaImportProductsRequest.from_dict(google_cloud_retail_v2alpha_import_products_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


