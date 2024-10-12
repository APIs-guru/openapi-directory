# PoliciesPatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**policy** | [**Policy**](Policy.md) |  | [optional] 

## Example

```python
from openapi_client.models.policies_patch_response import PoliciesPatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PoliciesPatchResponse from a JSON string
policies_patch_response_instance = PoliciesPatchResponse.from_json(json)
# print the JSON string representation of the object
print(PoliciesPatchResponse.to_json())

# convert the object into a dict
policies_patch_response_dict = policies_patch_response_instance.to_dict()
# create an instance of PoliciesPatchResponse from a dict
policies_patch_response_from_dict = PoliciesPatchResponse.from_dict(policies_patch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


