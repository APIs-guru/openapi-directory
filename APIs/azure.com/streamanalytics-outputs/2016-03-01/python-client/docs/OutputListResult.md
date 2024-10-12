# OutputListResult

Object containing a list of outputs under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Output]**](Output.md) | A list of outputs under a streaming job. Populated by a &#39;List&#39; operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.output_list_result import OutputListResult

# TODO update the JSON string below
json = "{}"
# create an instance of OutputListResult from a JSON string
output_list_result_instance = OutputListResult.from_json(json)
# print the JSON string representation of the object
print(OutputListResult.to_json())

# convert the object into a dict
output_list_result_dict = output_list_result_instance.to_dict()
# create an instance of OutputListResult from a dict
output_list_result_from_dict = OutputListResult.from_dict(output_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


