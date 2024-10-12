# StorePatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_connection_id** | **str** | Service connection id to updated. | 

## Example

```python
from openapi_client.models.store_patch_request import StorePatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StorePatchRequest from a JSON string
store_patch_request_instance = StorePatchRequest.from_json(json)
# print the JSON string representation of the object
print(StorePatchRequest.to_json())

# convert the object into a dict
store_patch_request_dict = store_patch_request_instance.to_dict()
# create an instance of StorePatchRequest from a dict
store_patch_request_from_dict = StorePatchRequest.from_dict(store_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


