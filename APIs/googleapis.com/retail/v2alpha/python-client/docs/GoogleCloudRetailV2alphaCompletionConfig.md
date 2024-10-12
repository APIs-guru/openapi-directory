# GoogleCloudRetailV2alphaCompletionConfig

Catalog level autocomplete config for customers to customize autocomplete feature's settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist_input_config** | [**GoogleCloudRetailV2alphaCompletionDataInputConfig**](GoogleCloudRetailV2alphaCompletionDataInputConfig.md) |  | [optional] 
**auto_learning** | **bool** | If set to true, the auto learning function is enabled. Auto learning uses user data to generate suggestions using ML techniques. Default value is false. Only after enabling auto learning can users use &#x60;cloud-retail&#x60; data in CompleteQueryRequest. | [optional] 
**denylist_input_config** | [**GoogleCloudRetailV2alphaCompletionDataInputConfig**](GoogleCloudRetailV2alphaCompletionDataInputConfig.md) |  | [optional] 
**last_allowlist_import_operation** | **str** | Output only. Name of the LRO corresponding to the latest allowlist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation. | [optional] [readonly] 
**last_denylist_import_operation** | **str** | Output only. Name of the LRO corresponding to the latest denylist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation. | [optional] [readonly] 
**last_suggestions_import_operation** | **str** | Output only. Name of the LRO corresponding to the latest suggestion terms list import. Can use GetOperation API method to retrieve the latest state of the Long Running Operation. | [optional] [readonly] 
**matching_order** | **str** | Specifies the matching order for autocomplete suggestions, e.g., a query consisting of &#39;sh&#39; with &#39;out-of-order&#39; specified would suggest \&quot;women&#39;s shoes\&quot;, whereas a query of &#39;red s&#39; with &#39;exact-prefix&#39; specified would suggest \&quot;red shoes\&quot;. Currently supported values: * &#39;out-of-order&#39; * &#39;exact-prefix&#39; Default value: &#39;exact-prefix&#39;. | [optional] 
**max_suggestions** | **int** | The maximum number of autocomplete suggestions returned per term. Default value is 20. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20. | [optional] 
**min_prefix_length** | **int** | The minimum number of characters needed to be typed in order to get suggestions. Default value is 2. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20. | [optional] 
**name** | **str** | Required. Immutable. Fully qualified name &#x60;projects/*/locations/*/catalogs/*/completionConfig&#x60; | [optional] 
**suggestions_input_config** | [**GoogleCloudRetailV2alphaCompletionDataInputConfig**](GoogleCloudRetailV2alphaCompletionDataInputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_completion_config import GoogleCloudRetailV2alphaCompletionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaCompletionConfig from a JSON string
google_cloud_retail_v2alpha_completion_config_instance = GoogleCloudRetailV2alphaCompletionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaCompletionConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_completion_config_dict = google_cloud_retail_v2alpha_completion_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaCompletionConfig from a dict
google_cloud_retail_v2alpha_completion_config_from_dict = GoogleCloudRetailV2alphaCompletionConfig.from_dict(google_cloud_retail_v2alpha_completion_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


