# UpdateProfileBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing** | [**Address**](Address.md) |  | [optional] 
**card** | [**ProfileToken**](ProfileToken.md) |  | [optional] 
**comment** | **str** | alphanumeric(256) | [optional] 
**custom** | [**Custom**](Custom.md) |  | [optional] 
**language** | **str** | characters(2) | [optional] 

## Example

```python
from openapi_client.models.update_profile_body import UpdateProfileBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProfileBody from a JSON string
update_profile_body_instance = UpdateProfileBody.from_json(json)
# print the JSON string representation of the object
print(UpdateProfileBody.to_json())

# convert the object into a dict
update_profile_body_dict = update_profile_body_instance.to_dict()
# create an instance of UpdateProfileBody from a dict
update_profile_body_from_dict = UpdateProfileBody.from_dict(update_profile_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


