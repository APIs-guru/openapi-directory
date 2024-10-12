# UnknownTarget

Storage container for use as an Unknown Storage Target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unknown_map** | **Dict[str, str]** | Properties of an unknown type of Storage Target. | [optional] 

## Example

```python
from openapi_client.models.unknown_target import UnknownTarget

# TODO update the JSON string below
json = "{}"
# create an instance of UnknownTarget from a JSON string
unknown_target_instance = UnknownTarget.from_json(json)
# print the JSON string representation of the object
print(UnknownTarget.to_json())

# convert the object into a dict
unknown_target_dict = unknown_target_instance.to_dict()
# create an instance of UnknownTarget from a dict
unknown_target_from_dict = UnknownTarget.from_dict(unknown_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


