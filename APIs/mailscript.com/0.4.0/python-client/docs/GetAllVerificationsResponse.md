# GetAllVerificationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**List[GetAllVerificationsResponseListInner]**](GetAllVerificationsResponseListInner.md) |  | 

## Example

```python
from openapi_client.models.get_all_verifications_response import GetAllVerificationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllVerificationsResponse from a JSON string
get_all_verifications_response_instance = GetAllVerificationsResponse.from_json(json)
# print the JSON string representation of the object
print(GetAllVerificationsResponse.to_json())

# convert the object into a dict
get_all_verifications_response_dict = get_all_verifications_response_instance.to_dict()
# create an instance of GetAllVerificationsResponse from a dict
get_all_verifications_response_from_dict = GetAllVerificationsResponse.from_dict(get_all_verifications_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


