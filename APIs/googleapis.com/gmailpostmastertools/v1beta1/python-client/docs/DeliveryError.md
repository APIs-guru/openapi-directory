# DeliveryError

Metric on a particular delivery error type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_class** | **str** | The class of delivery error. | [optional] 
**error_ratio** | **float** | The ratio of messages where the error occurred vs all authenticated traffic. | [optional] 
**error_type** | **str** | The type of delivery error. | [optional] 

## Example

```python
from openapi_client.models.delivery_error import DeliveryError

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryError from a JSON string
delivery_error_instance = DeliveryError.from_json(json)
# print the JSON string representation of the object
print(DeliveryError.to_json())

# convert the object into a dict
delivery_error_dict = delivery_error_instance.to_dict()
# create an instance of DeliveryError from a dict
delivery_error_from_dict = DeliveryError.from_dict(delivery_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


