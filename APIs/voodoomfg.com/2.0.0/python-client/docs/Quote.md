# Quote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** | List of any issues quoting your order. | [optional] 
**grand_total** | **float** | Sum of items, shipping costs, and any calculated tax. | [optional] 
**items** | **float** | Cost to make the specified models in the specified materials and quantities. | [optional] 
**options** | [**ProductionOptionsCosts**](ProductionOptionsCosts.md) |  | [optional] 
**shipping** | **float** | Cost of the selected shipping method. | [optional] 
**tax** | **float** | The tax calculated for the given order. Tax is not applied to all orders. | [optional] 
**total** | **float** | Sum of items and shipping costs. This is the taxable subtotal. | [optional] 

## Example

```python
from openapi_client.models.quote import Quote

# TODO update the JSON string below
json = "{}"
# create an instance of Quote from a JSON string
quote_instance = Quote.from_json(json)
# print the JSON string representation of the object
print(Quote.to_json())

# convert the object into a dict
quote_dict = quote_instance.to_dict()
# create an instance of Quote from a dict
quote_from_dict = Quote.from_dict(quote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


