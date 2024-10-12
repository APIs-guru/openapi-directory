# ReleaseStoreDestinationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique id of the release destination | 

## Example

```python
from openapi_client.models.release_store_destination_request import ReleaseStoreDestinationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseStoreDestinationRequest from a JSON string
release_store_destination_request_instance = ReleaseStoreDestinationRequest.from_json(json)
# print the JSON string representation of the object
print(ReleaseStoreDestinationRequest.to_json())

# convert the object into a dict
release_store_destination_request_dict = release_store_destination_request_instance.to_dict()
# create an instance of ReleaseStoreDestinationRequest from a dict
release_store_destination_request_from_dict = ReleaseStoreDestinationRequest.from_dict(release_store_destination_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


