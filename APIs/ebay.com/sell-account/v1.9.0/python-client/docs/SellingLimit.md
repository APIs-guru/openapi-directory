# SellingLimit

Type used by the <b>sellingLimit</b> container, a container that lists the monthly cap for the quantity of items sold and total sales amount allowed for the seller's account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 
**quantity** | **int** | This field shows the monthly cap for total quantity sold allowed for the seller&#39;s account. This container may not be returned if a seller does not have a monthly cap for total quantity sold. | [optional] 

## Example

```python
from openapi_client.models.selling_limit import SellingLimit

# TODO update the JSON string below
json = "{}"
# create an instance of SellingLimit from a JSON string
selling_limit_instance = SellingLimit.from_json(json)
# print the JSON string representation of the object
print(SellingLimit.to_json())

# convert the object into a dict
selling_limit_dict = selling_limit_instance.to_dict()
# create an instance of SellingLimit from a dict
selling_limit_from_dict = SellingLimit.from_dict(selling_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


