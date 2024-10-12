# ProductAvailabilityChangeEvent

An event generated whenever a product's availability changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_status** | **str** | The new state of the product. This field will always be present. | [optional] 
**product_id** | **str** | The id of the product (e.g. \&quot;app:com.google.android.gm\&quot;) for which the product availability changed. This field will always be present. | [optional] 

## Example

```python
from openapi_client.models.product_availability_change_event import ProductAvailabilityChangeEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAvailabilityChangeEvent from a JSON string
product_availability_change_event_instance = ProductAvailabilityChangeEvent.from_json(json)
# print the JSON string representation of the object
print(ProductAvailabilityChangeEvent.to_json())

# convert the object into a dict
product_availability_change_event_dict = product_availability_change_event_instance.to_dict()
# create an instance of ProductAvailabilityChangeEvent from a dict
product_availability_change_event_from_dict = ProductAvailabilityChangeEvent.from_dict(product_availability_change_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


