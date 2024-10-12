# BlobServicesListMetricDefinitions200Response

Pageable list of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[BlobServicesListMetricDefinitions200ResponseValueInner]**](BlobServicesListMetricDefinitions200ResponseValueInner.md) | List of metric definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_services_list_metric_definitions200_response import BlobServicesListMetricDefinitions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BlobServicesListMetricDefinitions200Response from a JSON string
blob_services_list_metric_definitions200_response_instance = BlobServicesListMetricDefinitions200Response.from_json(json)
# print the JSON string representation of the object
print(BlobServicesListMetricDefinitions200Response.to_json())

# convert the object into a dict
blob_services_list_metric_definitions200_response_dict = blob_services_list_metric_definitions200_response_instance.to_dict()
# create an instance of BlobServicesListMetricDefinitions200Response from a dict
blob_services_list_metric_definitions200_response_from_dict = BlobServicesListMetricDefinitions200Response.from_dict(blob_services_list_metric_definitions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


