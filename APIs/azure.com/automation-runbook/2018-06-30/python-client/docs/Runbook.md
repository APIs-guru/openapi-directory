# Runbook

Definition of the runbook type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets or sets the etag of the resource. | [optional] 
**properties** | [**RunbookProperties**](RunbookProperties.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.runbook import Runbook

# TODO update the JSON string below
json = "{}"
# create an instance of Runbook from a JSON string
runbook_instance = Runbook.from_json(json)
# print the JSON string representation of the object
print(Runbook.to_json())

# convert the object into a dict
runbook_dict = runbook_instance.to_dict()
# create an instance of Runbook from a dict
runbook_from_dict = Runbook.from_dict(runbook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


