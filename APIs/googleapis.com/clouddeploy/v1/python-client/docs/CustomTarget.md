# CustomTarget

Information specifying a Custom Target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_target_type** | **str** | Required. The name of the CustomTargetType. Format must be &#x60;projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.custom_target import CustomTarget

# TODO update the JSON string below
json = "{}"
# create an instance of CustomTarget from a JSON string
custom_target_instance = CustomTarget.from_json(json)
# print the JSON string representation of the object
print(CustomTarget.to_json())

# convert the object into a dict
custom_target_dict = custom_target_instance.to_dict()
# create an instance of CustomTarget from a dict
custom_target_from_dict = CustomTarget.from_dict(custom_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


