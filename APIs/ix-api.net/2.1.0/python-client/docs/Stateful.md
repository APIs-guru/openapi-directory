# Stateful


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** |  | 
**status** | [**List[Status]**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.stateful import Stateful

# TODO update the JSON string below
json = "{}"
# create an instance of Stateful from a JSON string
stateful_instance = Stateful.from_json(json)
# print the JSON string representation of the object
print(Stateful.to_json())

# convert the object into a dict
stateful_dict = stateful_instance.to_dict()
# create an instance of Stateful from a dict
stateful_from_dict = Stateful.from_dict(stateful_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


