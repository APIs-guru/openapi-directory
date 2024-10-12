# Run

Run resource properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RunProperties**](RunProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.run import Run

# TODO update the JSON string below
json = "{}"
# create an instance of Run from a JSON string
run_instance = Run.from_json(json)
# print the JSON string representation of the object
print(Run.to_json())

# convert the object into a dict
run_dict = run_instance.to_dict()
# create an instance of Run from a dict
run_from_dict = Run.from_dict(run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


