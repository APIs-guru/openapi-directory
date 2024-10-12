# HTTPDelivery

HTTPDelivery is the delivery configuration for an HTTP notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | The URI to which JSON-containing HTTP POST requests should be sent. | [optional] 

## Example

```python
from openapi_client.models.http_delivery import HTTPDelivery

# TODO update the JSON string below
json = "{}"
# create an instance of HTTPDelivery from a JSON string
http_delivery_instance = HTTPDelivery.from_json(json)
# print the JSON string representation of the object
print(HTTPDelivery.to_json())

# convert the object into a dict
http_delivery_dict = http_delivery_instance.to_dict()
# create an instance of HTTPDelivery from a dict
http_delivery_from_dict = HTTPDelivery.from_dict(http_delivery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


