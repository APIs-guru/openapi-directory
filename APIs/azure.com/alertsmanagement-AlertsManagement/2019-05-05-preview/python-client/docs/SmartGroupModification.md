# SmartGroupModification

Alert Modification details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SmartGroupModificationProperties**](SmartGroupModificationProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.smart_group_modification import SmartGroupModification

# TODO update the JSON string below
json = "{}"
# create an instance of SmartGroupModification from a JSON string
smart_group_modification_instance = SmartGroupModification.from_json(json)
# print the JSON string representation of the object
print(SmartGroupModification.to_json())

# convert the object into a dict
smart_group_modification_dict = smart_group_modification_instance.to_dict()
# create an instance of SmartGroupModification from a dict
smart_group_modification_from_dict = SmartGroupModification.from_dict(smart_group_modification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


