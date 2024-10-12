# ListTransferConfigsResponse

The returned list of pipelines in the project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. The next-pagination token. For multiple-page list results, this token can be used as the &#x60;ListTransferConfigsRequest.page_token&#x60; to request the next page of list results. | [optional] [readonly] 
**transfer_configs** | [**List[TransferConfig]**](TransferConfig.md) | Output only. The stored pipeline transfer configurations. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_transfer_configs_response import ListTransferConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTransferConfigsResponse from a JSON string
list_transfer_configs_response_instance = ListTransferConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTransferConfigsResponse.to_json())

# convert the object into a dict
list_transfer_configs_response_dict = list_transfer_configs_response_instance.to_dict()
# create an instance of ListTransferConfigsResponse from a dict
list_transfer_configs_response_from_dict = ListTransferConfigsResponse.from_dict(list_transfer_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


