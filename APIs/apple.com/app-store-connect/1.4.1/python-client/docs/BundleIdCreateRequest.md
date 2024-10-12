# BundleIdCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleIdCreateRequestData**](BundleIdCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.bundle_id_create_request import BundleIdCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCreateRequest from a JSON string
bundle_id_create_request_instance = BundleIdCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BundleIdCreateRequest.to_json())

# convert the object into a dict
bundle_id_create_request_dict = bundle_id_create_request_instance.to_dict()
# create an instance of BundleIdCreateRequest from a dict
bundle_id_create_request_from_dict = BundleIdCreateRequest.from_dict(bundle_id_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


