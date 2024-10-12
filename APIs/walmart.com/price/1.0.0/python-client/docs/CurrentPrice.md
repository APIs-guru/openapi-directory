# CurrentPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**currency** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.current_price import CurrentPrice

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentPrice from a JSON string
current_price_instance = CurrentPrice.from_json(json)
# print the JSON string representation of the object
print(CurrentPrice.to_json())

# convert the object into a dict
current_price_dict = current_price_instance.to_dict()
# create an instance of CurrentPrice from a dict
current_price_from_dict = CurrentPrice.from_dict(current_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


