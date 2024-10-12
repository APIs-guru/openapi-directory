# Cashback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_amount** | **int** | Maximum cashback amount permitted at the location. | [optional] 

## Example

```python
from openapi_client.models.cashback import Cashback

# TODO update the JSON string below
json = "{}"
# create an instance of Cashback from a JSON string
cashback_instance = Cashback.from_json(json)
# print the JSON string representation of the object
print(Cashback.to_json())

# convert the object into a dict
cashback_dict = cashback_instance.to_dict()
# create an instance of Cashback from a dict
cashback_from_dict = Cashback.from_dict(cashback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


