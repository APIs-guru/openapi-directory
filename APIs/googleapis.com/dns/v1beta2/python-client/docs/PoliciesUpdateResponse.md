# PoliciesUpdateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**policy** | [**Policy**](Policy.md) |  | [optional] 

## Example

```python
from openapi_client.models.policies_update_response import PoliciesUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PoliciesUpdateResponse from a JSON string
policies_update_response_instance = PoliciesUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(PoliciesUpdateResponse.to_json())

# convert the object into a dict
policies_update_response_dict = policies_update_response_instance.to_dict()
# create an instance of PoliciesUpdateResponse from a dict
policies_update_response_from_dict = PoliciesUpdateResponse.from_dict(policies_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


