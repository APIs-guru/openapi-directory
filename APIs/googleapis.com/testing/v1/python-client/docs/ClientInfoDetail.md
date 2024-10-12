# ClientInfoDetail

Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. The key of detailed client information. | [optional] 
**value** | **str** | Required. The value of detailed client information. | [optional] 

## Example

```python
from openapi_client.models.client_info_detail import ClientInfoDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ClientInfoDetail from a JSON string
client_info_detail_instance = ClientInfoDetail.from_json(json)
# print the JSON string representation of the object
print(ClientInfoDetail.to_json())

# convert the object into a dict
client_info_detail_dict = client_info_detail_instance.to_dict()
# create an instance of ClientInfoDetail from a dict
client_info_detail_from_dict = ClientInfoDetail.from_dict(client_info_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


