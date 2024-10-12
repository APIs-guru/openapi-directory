# CustomPriceDetailsKind

Represents Custom price showback rule model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**CustomPriceDetails**](CustomPriceDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_price_details_kind import CustomPriceDetailsKind

# TODO update the JSON string below
json = "{}"
# create an instance of CustomPriceDetailsKind from a JSON string
custom_price_details_kind_instance = CustomPriceDetailsKind.from_json(json)
# print the JSON string representation of the object
print(CustomPriceDetailsKind.to_json())

# convert the object into a dict
custom_price_details_kind_dict = custom_price_details_kind_instance.to_dict()
# create an instance of CustomPriceDetailsKind from a dict
custom_price_details_kind_from_dict = CustomPriceDetailsKind.from_dict(custom_price_details_kind_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


