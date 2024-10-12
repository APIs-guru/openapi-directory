# LineDeliveryDeliveryLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The location identifier. | [optional] 
**scheme_id** | **str** | The schemeId of the location identifier (e.g. &#39;0088&#39;) | [optional] 

## Example

```python
from openapi_client.models.line_delivery_delivery_location import LineDeliveryDeliveryLocation

# TODO update the JSON string below
json = "{}"
# create an instance of LineDeliveryDeliveryLocation from a JSON string
line_delivery_delivery_location_instance = LineDeliveryDeliveryLocation.from_json(json)
# print the JSON string representation of the object
print(LineDeliveryDeliveryLocation.to_json())

# convert the object into a dict
line_delivery_delivery_location_dict = line_delivery_delivery_location_instance.to_dict()
# create an instance of LineDeliveryDeliveryLocation from a dict
line_delivery_delivery_location_from_dict = LineDeliveryDeliveryLocation.from_dict(line_delivery_delivery_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


