# TargetAttribute

Contains criteria for selecting Targets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the &#x60;Target&#x60;. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * \&quot;*\&quot;, all targets in a location. | [optional] 
**labels** | **Dict[str, str]** | Target labels. | [optional] 

## Example

```python
from openapi_client.models.target_attribute import TargetAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of TargetAttribute from a JSON string
target_attribute_instance = TargetAttribute.from_json(json)
# print the JSON string representation of the object
print(TargetAttribute.to_json())

# convert the object into a dict
target_attribute_dict = target_attribute_instance.to_dict()
# create an instance of TargetAttribute from a dict
target_attribute_from_dict = TargetAttribute.from_dict(target_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


