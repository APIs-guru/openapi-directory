# BanksResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Bank]**](Bank.md) |  | [optional] 
**links** | [**ResponseLinks**](ResponseLinks.md) |  | [optional] 
**meta** | [**ResponseMeta**](ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.banks_response import BanksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BanksResponse from a JSON string
banks_response_instance = BanksResponse.from_json(json)
# print the JSON string representation of the object
print(BanksResponse.to_json())

# convert the object into a dict
banks_response_dict = banks_response_instance.to_dict()
# create an instance of BanksResponse from a dict
banks_response_from_dict = BanksResponse.from_dict(banks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


