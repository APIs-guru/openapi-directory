# ControllersSystemAdvisoryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ControllersSystemAdvisoryItemAttributes**](ControllersSystemAdvisoryItemAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_system_advisory_item import ControllersSystemAdvisoryItem

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemAdvisoryItem from a JSON string
controllers_system_advisory_item_instance = ControllersSystemAdvisoryItem.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemAdvisoryItem.to_json())

# convert the object into a dict
controllers_system_advisory_item_dict = controllers_system_advisory_item_instance.to_dict()
# create an instance of ControllersSystemAdvisoryItem from a dict
controllers_system_advisory_item_from_dict = ControllersSystemAdvisoryItem.from_dict(controllers_system_advisory_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


