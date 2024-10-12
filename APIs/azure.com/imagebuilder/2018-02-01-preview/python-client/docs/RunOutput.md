# RunOutput

Represents an output that was created by running an image template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RunOutputProperties**](RunOutputProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.run_output import RunOutput

# TODO update the JSON string below
json = "{}"
# create an instance of RunOutput from a JSON string
run_output_instance = RunOutput.from_json(json)
# print the JSON string representation of the object
print(RunOutput.to_json())

# convert the object into a dict
run_output_dict = run_output_instance.to_dict()
# create an instance of RunOutput from a dict
run_output_from_dict = RunOutput.from_dict(run_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


