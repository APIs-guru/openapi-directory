# StatusesDefault

Default Statuses entity for the given tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextlink** | **str** | Gets the URL to get the next set of results. | [optional] [readonly] 
**properties** | [**StatusesProperties**](StatusesProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.statuses_default import StatusesDefault

# TODO update the JSON string below
json = "{}"
# create an instance of StatusesDefault from a JSON string
statuses_default_instance = StatusesDefault.from_json(json)
# print the JSON string representation of the object
print(StatusesDefault.to_json())

# convert the object into a dict
statuses_default_dict = statuses_default_instance.to_dict()
# create an instance of StatusesDefault from a dict
statuses_default_from_dict = StatusesDefault.from_dict(statuses_default_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


