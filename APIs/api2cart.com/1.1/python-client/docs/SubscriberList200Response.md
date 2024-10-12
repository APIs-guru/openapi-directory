# SubscriberList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**SubscriberList200ResponseResult**](SubscriberList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.subscriber_list200_response import SubscriberList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriberList200Response from a JSON string
subscriber_list200_response_instance = SubscriberList200Response.from_json(json)
# print the JSON string representation of the object
print(SubscriberList200Response.to_json())

# convert the object into a dict
subscriber_list200_response_dict = subscriber_list200_response_instance.to_dict()
# create an instance of SubscriberList200Response from a dict
subscriber_list200_response_from_dict = SubscriberList200Response.from_dict(subscriber_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


