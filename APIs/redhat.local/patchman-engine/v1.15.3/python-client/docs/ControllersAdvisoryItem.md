# ControllersAdvisoryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ControllersAdvisoryItemAttributes**](ControllersAdvisoryItemAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_advisory_item import ControllersAdvisoryItem

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersAdvisoryItem from a JSON string
controllers_advisory_item_instance = ControllersAdvisoryItem.from_json(json)
# print the JSON string representation of the object
print(ControllersAdvisoryItem.to_json())

# convert the object into a dict
controllers_advisory_item_dict = controllers_advisory_item_instance.to_dict()
# create an instance of ControllersAdvisoryItem from a dict
controllers_advisory_item_from_dict = ControllersAdvisoryItem.from_dict(controllers_advisory_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


