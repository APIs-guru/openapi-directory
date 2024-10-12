# CheckAccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_access** | **bool** | Returns true if principal has access. Returns false otherwise. | [optional] 

## Example

```python
from openapi_client.models.check_access_response import CheckAccessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckAccessResponse from a JSON string
check_access_response_instance = CheckAccessResponse.from_json(json)
# print the JSON string representation of the object
print(CheckAccessResponse.to_json())

# convert the object into a dict
check_access_response_dict = check_access_response_instance.to_dict()
# create an instance of CheckAccessResponse from a dict
check_access_response_from_dict = CheckAccessResponse.from_dict(check_access_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


