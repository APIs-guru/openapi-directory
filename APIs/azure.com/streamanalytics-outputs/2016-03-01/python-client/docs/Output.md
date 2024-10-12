# Output

An output object, containing all information associated with the named output. All outputs are contained under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OutputProperties**](OutputProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.output import Output

# TODO update the JSON string below
json = "{}"
# create an instance of Output from a JSON string
output_instance = Output.from_json(json)
# print the JSON string representation of the object
print(Output.to_json())

# convert the object into a dict
output_dict = output_instance.to_dict()
# create an instance of Output from a dict
output_from_dict = Output.from_dict(output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


