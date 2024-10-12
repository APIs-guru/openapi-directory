# UpdateMessengerAccount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The provider access token | 
**api_key** | **str** | The external api key for this account | 
**applications** | **List[str]** | The array of associated application ids | [optional] 
**external_id** | **str** | The external identifier for this account. In this case it is the Facebook Page ID. | 
**name** | **str** | The account name | [optional] 
**provider** | **str** | The provider (will be &#x60;messenger&#x60;). | 

## Example

```python
from openapi_client.models.update_messenger_account200_response import UpdateMessengerAccount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMessengerAccount200Response from a JSON string
update_messenger_account200_response_instance = UpdateMessengerAccount200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateMessengerAccount200Response.to_json())

# convert the object into a dict
update_messenger_account200_response_dict = update_messenger_account200_response_instance.to_dict()
# create an instance of UpdateMessengerAccount200Response from a dict
update_messenger_account200_response_from_dict = UpdateMessengerAccount200Response.from_dict(update_messenger_account200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


