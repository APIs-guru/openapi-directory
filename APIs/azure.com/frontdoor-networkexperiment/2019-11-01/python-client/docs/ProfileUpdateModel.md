# ProfileUpdateModel

Defines modifiable attributes of a Profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProfileUpdateProperties**](ProfileUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.profile_update_model import ProfileUpdateModel

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileUpdateModel from a JSON string
profile_update_model_instance = ProfileUpdateModel.from_json(json)
# print the JSON string representation of the object
print(ProfileUpdateModel.to_json())

# convert the object into a dict
profile_update_model_dict = profile_update_model_instance.to_dict()
# create an instance of ProfileUpdateModel from a dict
profile_update_model_from_dict = ProfileUpdateModel.from_dict(profile_update_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


