# Forex


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a** | **int** | Ask price | [optional] 
**b** | **int** | Bid price | [optional] 
**t** | **int** | Timestamp of this trade | [optional] 

## Example

```python
from openapi_client.models.forex import Forex

# TODO update the JSON string below
json = "{}"
# create an instance of Forex from a JSON string
forex_instance = Forex.from_json(json)
# print the JSON string representation of the object
print(Forex.to_json())

# convert the object into a dict
forex_dict = forex_instance.to_dict()
# create an instance of Forex from a dict
forex_from_dict = Forex.from_dict(forex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


