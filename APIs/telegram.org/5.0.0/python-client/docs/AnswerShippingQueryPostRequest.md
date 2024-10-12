# AnswerShippingQueryPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | Required if *ok* is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. \&quot;Sorry, delivery to your desired address is unavailable&#39;). Telegram will display this message to the user. | [optional] 
**ok** | **bool** | Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) | 
**shipping_options** | [**List[ShippingOption]**](ShippingOption.md) | Required if *ok* is True. A JSON-serialized array of available shipping options. | [optional] 
**shipping_query_id** | **str** | Unique identifier for the query to be answered | 

## Example

```python
from openapi_client.models.answer_shipping_query_post_request import AnswerShippingQueryPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnswerShippingQueryPostRequest from a JSON string
answer_shipping_query_post_request_instance = AnswerShippingQueryPostRequest.from_json(json)
# print the JSON string representation of the object
print(AnswerShippingQueryPostRequest.to_json())

# convert the object into a dict
answer_shipping_query_post_request_dict = answer_shipping_query_post_request_instance.to_dict()
# create an instance of AnswerShippingQueryPostRequest from a dict
answer_shipping_query_post_request_from_dict = AnswerShippingQueryPostRequest.from_dict(answer_shipping_query_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


