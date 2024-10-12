# Runs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**runs** | [**List[Run]**](Run.md) |  | [optional] 

## Example

```python
from openapi_client.models.runs import Runs

# TODO update the JSON string below
json = "{}"
# create an instance of Runs from a JSON string
runs_instance = Runs.from_json(json)
# print the JSON string representation of the object
print(Runs.to_json())

# convert the object into a dict
runs_dict = runs_instance.to_dict()
# create an instance of Runs from a dict
runs_from_dict = Runs.from_dict(runs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


