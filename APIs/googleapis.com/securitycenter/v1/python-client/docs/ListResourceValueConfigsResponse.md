# ListResourceValueConfigsResponse

Response message to list resource value configs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**resource_value_configs** | [**List[GoogleCloudSecuritycenterV1ResourceValueConfig]**](GoogleCloudSecuritycenterV1ResourceValueConfig.md) | The resource value configs from the specified parent. | [optional] 

## Example

```python
from openapi_client.models.list_resource_value_configs_response import ListResourceValueConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListResourceValueConfigsResponse from a JSON string
list_resource_value_configs_response_instance = ListResourceValueConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListResourceValueConfigsResponse.to_json())

# convert the object into a dict
list_resource_value_configs_response_dict = list_resource_value_configs_response_instance.to_dict()
# create an instance of ListResourceValueConfigsResponse from a dict
list_resource_value_configs_response_from_dict = ListResourceValueConfigsResponse.from_dict(list_resource_value_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


