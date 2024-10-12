# CreateProfileBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing** | [**Address**](Address.md) |  | [optional] 
**card** | [**ProfileFromCard**](ProfileFromCard.md) |  | [optional] 
**comment** | **str** | alphanumeric(256) | [optional] 
**custom** | [**Custom**](Custom.md) |  | [optional] 
**language** | **str** | characters(2) | [optional] 
**token** | [**ProfileFromToken**](ProfileFromToken.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_profile_body import CreateProfileBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProfileBody from a JSON string
create_profile_body_instance = CreateProfileBody.from_json(json)
# print the JSON string representation of the object
print(CreateProfileBody.to_json())

# convert the object into a dict
create_profile_body_dict = create_profile_body_instance.to_dict()
# create an instance of CreateProfileBody from a dict
create_profile_body_from_dict = CreateProfileBody.from_dict(create_profile_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


