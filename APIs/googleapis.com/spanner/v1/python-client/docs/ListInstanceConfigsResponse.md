# ListInstanceConfigsResponse

The response for ListInstanceConfigs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_configs** | [**List[InstanceConfig]**](InstanceConfig.md) | The list of requested instance configurations. | [optional] 
**next_page_token** | **str** | &#x60;next_page_token&#x60; can be sent in a subsequent ListInstanceConfigs call to fetch more of the matching instance configurations. | [optional] 

## Example

```python
from openapi_client.models.list_instance_configs_response import ListInstanceConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInstanceConfigsResponse from a JSON string
list_instance_configs_response_instance = ListInstanceConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListInstanceConfigsResponse.to_json())

# convert the object into a dict
list_instance_configs_response_dict = list_instance_configs_response_instance.to_dict()
# create an instance of ListInstanceConfigsResponse from a dict
list_instance_configs_response_from_dict = ListInstanceConfigsResponse.from_dict(list_instance_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


