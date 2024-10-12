# DedicatedHsmListResult

List of dedicated HSMs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of dedicated hsms. | [optional] 
**value** | [**List[DedicatedHsm]**](DedicatedHsm.md) | The list of dedicated HSMs. | [optional] 

## Example

```python
from openapi_client.models.dedicated_hsm_list_result import DedicatedHsmListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHsmListResult from a JSON string
dedicated_hsm_list_result_instance = DedicatedHsmListResult.from_json(json)
# print the JSON string representation of the object
print(DedicatedHsmListResult.to_json())

# convert the object into a dict
dedicated_hsm_list_result_dict = dedicated_hsm_list_result_instance.to_dict()
# create an instance of DedicatedHsmListResult from a dict
dedicated_hsm_list_result_from_dict = DedicatedHsmListResult.from_dict(dedicated_hsm_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


