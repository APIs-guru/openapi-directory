# InputListResult

Object containing a list of inputs under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Input]**](Input.md) | A list of inputs under a streaming job. Populated by a &#39;List&#39; operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.input_list_result import InputListResult

# TODO update the JSON string below
json = "{}"
# create an instance of InputListResult from a JSON string
input_list_result_instance = InputListResult.from_json(json)
# print the JSON string representation of the object
print(InputListResult.to_json())

# convert the object into a dict
input_list_result_dict = input_list_result_instance.to_dict()
# create an instance of InputListResult from a dict
input_list_result_from_dict = InputListResult.from_dict(input_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


