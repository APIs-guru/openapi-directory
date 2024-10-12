# AppServiceCertificateOrderCollection

Collection of certificate orders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[AppServiceCertificateOrder]**](AppServiceCertificateOrder.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.app_service_certificate_order_collection import AppServiceCertificateOrderCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceCertificateOrderCollection from a JSON string
app_service_certificate_order_collection_instance = AppServiceCertificateOrderCollection.from_json(json)
# print the JSON string representation of the object
print(AppServiceCertificateOrderCollection.to_json())

# convert the object into a dict
app_service_certificate_order_collection_dict = app_service_certificate_order_collection_instance.to_dict()
# create an instance of AppServiceCertificateOrderCollection from a dict
app_service_certificate_order_collection_from_dict = AppServiceCertificateOrderCollection.from_dict(app_service_certificate_order_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


