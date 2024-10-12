# DefaultKey

Class to specify properties of default content key for each encryption scheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label can be used to specify Content Key when creating a Streaming Locator | [optional] 
**policy_name** | **str** | Policy used by Default Key | [optional] 

## Example

```python
from openapi_client.models.default_key import DefaultKey

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultKey from a JSON string
default_key_instance = DefaultKey.from_json(json)
# print the JSON string representation of the object
print(DefaultKey.to_json())

# convert the object into a dict
default_key_dict = default_key_instance.to_dict()
# create an instance of DefaultKey from a dict
default_key_from_dict = DefaultKey.from_dict(default_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


