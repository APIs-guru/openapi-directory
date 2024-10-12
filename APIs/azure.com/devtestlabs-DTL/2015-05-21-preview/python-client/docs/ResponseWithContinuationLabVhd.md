# ResponseWithContinuationLabVhd

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[LabVhd]**](LabVhd.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_lab_vhd import ResponseWithContinuationLabVhd

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationLabVhd from a JSON string
response_with_continuation_lab_vhd_instance = ResponseWithContinuationLabVhd.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationLabVhd.to_json())

# convert the object into a dict
response_with_continuation_lab_vhd_dict = response_with_continuation_lab_vhd_instance.to_dict()
# create an instance of ResponseWithContinuationLabVhd from a dict
response_with_continuation_lab_vhd_from_dict = ResponseWithContinuationLabVhd.from_dict(response_with_continuation_lab_vhd_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


