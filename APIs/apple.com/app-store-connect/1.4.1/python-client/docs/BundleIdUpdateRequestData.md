# BundleIdUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BundleIdUpdateRequestDataAttributes**](BundleIdUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.bundle_id_update_request_data import BundleIdUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdUpdateRequestData from a JSON string
bundle_id_update_request_data_instance = BundleIdUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(BundleIdUpdateRequestData.to_json())

# convert the object into a dict
bundle_id_update_request_data_dict = bundle_id_update_request_data_instance.to_dict()
# create an instance of BundleIdUpdateRequestData from a dict
bundle_id_update_request_data_from_dict = BundleIdUpdateRequestData.from_dict(bundle_id_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


