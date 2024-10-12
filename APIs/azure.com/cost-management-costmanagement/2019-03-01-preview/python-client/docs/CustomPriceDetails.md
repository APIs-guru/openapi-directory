# CustomPriceDetails

Represents Custom price showback rule model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefits** | **List[str]** | Array of benefits. | [optional] 
**markups** | [**List[Markup]**](Markup.md) | List of markups. | [optional] 
**pricesheet** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.custom_price_details import CustomPriceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CustomPriceDetails from a JSON string
custom_price_details_instance = CustomPriceDetails.from_json(json)
# print the JSON string representation of the object
print(CustomPriceDetails.to_json())

# convert the object into a dict
custom_price_details_dict = custom_price_details_instance.to_dict()
# create an instance of CustomPriceDetails from a dict
custom_price_details_from_dict = CustomPriceDetails.from_dict(custom_price_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


