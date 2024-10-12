# ListPretargetingConfigsResponse

A response containing pretargeting configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token which can be passed to a subsequent call to the &#x60;ListPretargetingConfigs&#x60; method to retrieve the next page of results in ListPretargetingConfigsRequest.pageToken. | [optional] 
**pretargeting_configs** | [**List[PretargetingConfig]**](PretargetingConfig.md) | List of pretargeting configurations. | [optional] 

## Example

```python
from openapi_client.models.list_pretargeting_configs_response import ListPretargetingConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPretargetingConfigsResponse from a JSON string
list_pretargeting_configs_response_instance = ListPretargetingConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPretargetingConfigsResponse.to_json())

# convert the object into a dict
list_pretargeting_configs_response_dict = list_pretargeting_configs_response_instance.to_dict()
# create an instance of ListPretargetingConfigsResponse from a dict
list_pretargeting_configs_response_from_dict = ListPretargetingConfigsResponse.from_dict(list_pretargeting_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


