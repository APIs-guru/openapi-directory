# BundleIdUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleIdUpdateRequestData**](BundleIdUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.bundle_id_update_request import BundleIdUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdUpdateRequest from a JSON string
bundle_id_update_request_instance = BundleIdUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BundleIdUpdateRequest.to_json())

# convert the object into a dict
bundle_id_update_request_dict = bundle_id_update_request_instance.to_dict()
# create an instance of BundleIdUpdateRequest from a dict
bundle_id_update_request_from_dict = BundleIdUpdateRequest.from_dict(bundle_id_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


