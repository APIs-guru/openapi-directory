# SmartGroup

Set of related alerts grouped together smartly by AMS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SmartGroupProperties**](SmartGroupProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.smart_group import SmartGroup

# TODO update the JSON string below
json = "{}"
# create an instance of SmartGroup from a JSON string
smart_group_instance = SmartGroup.from_json(json)
# print the JSON string representation of the object
print(SmartGroup.to_json())

# convert the object into a dict
smart_group_dict = smart_group_instance.to_dict()
# create an instance of SmartGroup from a dict
smart_group_from_dict = SmartGroup.from_dict(smart_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


