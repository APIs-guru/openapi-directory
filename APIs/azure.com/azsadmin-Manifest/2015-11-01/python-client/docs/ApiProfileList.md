# ApiProfileList

List of the API profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[ApiProfile]**](ApiProfile.md) | List of the API profiles. | [optional] 

## Example

```python
from openapi_client.models.api_profile_list import ApiProfileList

# TODO update the JSON string below
json = "{}"
# create an instance of ApiProfileList from a JSON string
api_profile_list_instance = ApiProfileList.from_json(json)
# print the JSON string representation of the object
print(ApiProfileList.to_json())

# convert the object into a dict
api_profile_list_dict = api_profile_list_instance.to_dict()
# create an instance of ApiProfileList from a dict
api_profile_list_from_dict = ApiProfileList.from_dict(api_profile_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


