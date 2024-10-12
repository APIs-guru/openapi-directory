# BlobServicesListMetrics200Response

Pageable list of metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[BlobServicesListMetrics200ResponseValueInner]**](BlobServicesListMetrics200ResponseValueInner.md) | List of metrics. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_services_list_metrics200_response import BlobServicesListMetrics200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BlobServicesListMetrics200Response from a JSON string
blob_services_list_metrics200_response_instance = BlobServicesListMetrics200Response.from_json(json)
# print the JSON string representation of the object
print(BlobServicesListMetrics200Response.to_json())

# convert the object into a dict
blob_services_list_metrics200_response_dict = blob_services_list_metrics200_response_instance.to_dict()
# create an instance of BlobServicesListMetrics200Response from a dict
blob_services_list_metrics200_response_from_dict = BlobServicesListMetrics200Response.from_dict(blob_services_list_metrics200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


