# StoresPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_connection_id** | **str** | Service connection id to updated. | 

## Example

```python
from openapi_client.models.stores_patch_request import StoresPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StoresPatchRequest from a JSON string
stores_patch_request_instance = StoresPatchRequest.from_json(json)
# print the JSON string representation of the object
print(StoresPatchRequest.to_json())

# convert the object into a dict
stores_patch_request_dict = stores_patch_request_instance.to_dict()
# create an instance of StoresPatchRequest from a dict
stores_patch_request_from_dict = StoresPatchRequest.from_dict(stores_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


