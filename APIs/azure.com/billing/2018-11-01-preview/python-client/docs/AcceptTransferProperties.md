# AcceptTransferProperties

Request parameters to accept transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_details** | [**List[ProductDetails]**](ProductDetails.md) | Request parameters to accept transfer. | [optional] 

## Example

```python
from openapi_client.models.accept_transfer_properties import AcceptTransferProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptTransferProperties from a JSON string
accept_transfer_properties_instance = AcceptTransferProperties.from_json(json)
# print the JSON string representation of the object
print(AcceptTransferProperties.to_json())

# convert the object into a dict
accept_transfer_properties_dict = accept_transfer_properties_instance.to_dict()
# create an instance of AcceptTransferProperties from a dict
accept_transfer_properties_from_dict = AcceptTransferProperties.from_dict(accept_transfer_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


