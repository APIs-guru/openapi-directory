# ClientInfo

Information about the client which invoked the test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_info_details** | [**List[ClientInfoDetail]**](ClientInfoDetail.md) | The list of detailed information about client. | [optional] 
**name** | **str** | Required. Client name, such as gcloud. | [optional] 

## Example

```python
from openapi_client.models.client_info import ClientInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ClientInfo from a JSON string
client_info_instance = ClientInfo.from_json(json)
# print the JSON string representation of the object
print(ClientInfo.to_json())

# convert the object into a dict
client_info_dict = client_info_instance.to_dict()
# create an instance of ClientInfo from a dict
client_info_from_dict = ClientInfo.from_dict(client_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


