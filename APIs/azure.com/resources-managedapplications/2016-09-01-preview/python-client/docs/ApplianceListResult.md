# ApplianceListResult

List of appliances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[Appliance]**](Appliance.md) | The array of appliances. | [optional] 

## Example

```python
from openapi_client.models.appliance_list_result import ApplianceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceListResult from a JSON string
appliance_list_result_instance = ApplianceListResult.from_json(json)
# print the JSON string representation of the object
print(ApplianceListResult.to_json())

# convert the object into a dict
appliance_list_result_dict = appliance_list_result_instance.to_dict()
# create an instance of ApplianceListResult from a dict
appliance_list_result_from_dict = ApplianceListResult.from_dict(appliance_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


