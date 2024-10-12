# BundleIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleId**](BundleId.md) |  | 
**included** | [**List[BundleIdResponseIncludedInner]**](BundleIdResponseIncludedInner.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.bundle_id_response import BundleIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdResponse from a JSON string
bundle_id_response_instance = BundleIdResponse.from_json(json)
# print the JSON string representation of the object
print(BundleIdResponse.to_json())

# convert the object into a dict
bundle_id_response_dict = bundle_id_response_instance.to_dict()
# create an instance of BundleIdResponse from a dict
bundle_id_response_from_dict = BundleIdResponse.from_dict(bundle_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


