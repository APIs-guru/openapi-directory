# AdministratorListResult

A list of active directory administrators.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ServerAzureADAdministrator]**](ServerAzureADAdministrator.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.administrator_list_result import AdministratorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AdministratorListResult from a JSON string
administrator_list_result_instance = AdministratorListResult.from_json(json)
# print the JSON string representation of the object
print(AdministratorListResult.to_json())

# convert the object into a dict
administrator_list_result_dict = administrator_list_result_instance.to_dict()
# create an instance of AdministratorListResult from a dict
administrator_list_result_from_dict = AdministratorListResult.from_dict(administrator_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


