# ControllersAdvisoryItemAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advisory_type** | **int** |  | [optional] 
**applicable_systems** | **int** |  | [optional] 
**cve_count** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**public_date** | **str** |  | [optional] 
**severity** | **int** |  | [optional] 
**synopsis** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_advisory_item_attributes import ControllersAdvisoryItemAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersAdvisoryItemAttributes from a JSON string
controllers_advisory_item_attributes_instance = ControllersAdvisoryItemAttributes.from_json(json)
# print the JSON string representation of the object
print(ControllersAdvisoryItemAttributes.to_json())

# convert the object into a dict
controllers_advisory_item_attributes_dict = controllers_advisory_item_attributes_instance.to_dict()
# create an instance of ControllersAdvisoryItemAttributes from a dict
controllers_advisory_item_attributes_from_dict = ControllersAdvisoryItemAttributes.from_dict(controllers_advisory_item_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


