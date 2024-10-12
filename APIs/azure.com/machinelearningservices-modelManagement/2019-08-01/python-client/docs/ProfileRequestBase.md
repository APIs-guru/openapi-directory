# ProfileRequestBase

The request for creating a profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The profile description. | [optional] 
**input_data** | **str** | The profile input data. | [optional] 
**kv_tags** | **Dict[str, str]** | The tags dictionary. | [optional] 
**name** | **str** | The profile name. | 
**properties** | **Dict[str, str]** | The properties dictionary. | [optional] 

## Example

```python
from openapi_client.models.profile_request_base import ProfileRequestBase

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileRequestBase from a JSON string
profile_request_base_instance = ProfileRequestBase.from_json(json)
# print the JSON string representation of the object
print(ProfileRequestBase.to_json())

# convert the object into a dict
profile_request_base_dict = profile_request_base_instance.to_dict()
# create an instance of ProfileRequestBase from a dict
profile_request_base_from_dict = ProfileRequestBase.from_dict(profile_request_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


