# CreateShipmentsResponseBody

A create shipments response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_errors** | **bool** | Indicates if errors occured while creating the shipments | [default to False]
**shipments** | [**List[CreateAndValidateShipment]**](CreateAndValidateShipment.md) | An array of shipments that were created. | 

## Example

```python
from openapi_client.models.create_shipments_response_body import CreateShipmentsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateShipmentsResponseBody from a JSON string
create_shipments_response_body_instance = CreateShipmentsResponseBody.from_json(json)
# print the JSON string representation of the object
print(CreateShipmentsResponseBody.to_json())

# convert the object into a dict
create_shipments_response_body_dict = create_shipments_response_body_instance.to_dict()
# create an instance of CreateShipmentsResponseBody from a dict
create_shipments_response_body_from_dict = CreateShipmentsResponseBody.from_dict(create_shipments_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


