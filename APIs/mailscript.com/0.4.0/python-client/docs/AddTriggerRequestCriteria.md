# AddTriggerRequestCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | [optional] 
**var_from** | **str** |  | [optional] 
**has_attachments** | **bool** |  | [optional] 
**has_the_words** | **str** |  | [optional] 
**sent_to** | **str** |  | [optional] 
**subject_contains** | **str** |  | [optional] 
**var_and** | **List[str]** |  | [optional] 
**var_or** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.add_trigger_request_criteria import AddTriggerRequestCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of AddTriggerRequestCriteria from a JSON string
add_trigger_request_criteria_instance = AddTriggerRequestCriteria.from_json(json)
# print the JSON string representation of the object
print(AddTriggerRequestCriteria.to_json())

# convert the object into a dict
add_trigger_request_criteria_dict = add_trigger_request_criteria_instance.to_dict()
# create an instance of AddTriggerRequestCriteria from a dict
add_trigger_request_criteria_from_dict = AddTriggerRequestCriteria.from_dict(add_trigger_request_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


