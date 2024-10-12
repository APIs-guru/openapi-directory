# TagShipmentResponseBody

A shipment add tag response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_id** | **str** | A string that uniquely identifies the shipment | [readonly] 
**tag** | [**Tag**](Tag.md) | The tag that is now associated with this shipment | [readonly] 

## Example

```python
from openapi_client.models.tag_shipment_response_body import TagShipmentResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of TagShipmentResponseBody from a JSON string
tag_shipment_response_body_instance = TagShipmentResponseBody.from_json(json)
# print the JSON string representation of the object
print(TagShipmentResponseBody.to_json())

# convert the object into a dict
tag_shipment_response_body_dict = tag_shipment_response_body_instance.to_dict()
# create an instance of TagShipmentResponseBody from a dict
tag_shipment_response_body_from_dict = TagShipmentResponseBody.from_dict(tag_shipment_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


