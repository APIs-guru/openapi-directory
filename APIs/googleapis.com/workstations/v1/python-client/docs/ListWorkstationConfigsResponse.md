# ListWorkstationConfigsResponse

Response message for ListWorkstationConfigs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | Unreachable resources. | [optional] 
**workstation_configs** | [**List[WorkstationConfig]**](WorkstationConfig.md) | The requested configs. | [optional] 

## Example

```python
from openapi_client.models.list_workstation_configs_response import ListWorkstationConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkstationConfigsResponse from a JSON string
list_workstation_configs_response_instance = ListWorkstationConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkstationConfigsResponse.to_json())

# convert the object into a dict
list_workstation_configs_response_dict = list_workstation_configs_response_instance.to_dict()
# create an instance of ListWorkstationConfigsResponse from a dict
list_workstation_configs_response_from_dict = ListWorkstationConfigsResponse.from_dict(list_workstation_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


