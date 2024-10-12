# Substatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**substatus** | **int** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.substatus import Substatus

# TODO update the JSON string below
json = "{}"
# create an instance of Substatus from a JSON string
substatus_instance = Substatus.from_json(json)
# print the JSON string representation of the object
print(Substatus.to_json())

# convert the object into a dict
substatus_dict = substatus_instance.to_dict()
# create an instance of Substatus from a dict
substatus_from_dict = Substatus.from_dict(substatus_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


