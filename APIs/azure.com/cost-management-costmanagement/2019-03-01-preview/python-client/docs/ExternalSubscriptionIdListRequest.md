# ExternalSubscriptionIdListRequest

The list of ExternalSubscriptionIds operation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **List[str]** | The list of ExternalSubscriptionIds. | [optional] 

## Example

```python
from openapi_client.models.external_subscription_id_list_request import ExternalSubscriptionIdListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSubscriptionIdListRequest from a JSON string
external_subscription_id_list_request_instance = ExternalSubscriptionIdListRequest.from_json(json)
# print the JSON string representation of the object
print(ExternalSubscriptionIdListRequest.to_json())

# convert the object into a dict
external_subscription_id_list_request_dict = external_subscription_id_list_request_instance.to_dict()
# create an instance of ExternalSubscriptionIdListRequest from a dict
external_subscription_id_list_request_from_dict = ExternalSubscriptionIdListRequest.from_dict(external_subscription_id_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


