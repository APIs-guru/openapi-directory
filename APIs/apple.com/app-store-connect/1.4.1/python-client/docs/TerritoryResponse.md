# TerritoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Territory**](Territory.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.territory_response import TerritoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TerritoryResponse from a JSON string
territory_response_instance = TerritoryResponse.from_json(json)
# print the JSON string representation of the object
print(TerritoryResponse.to_json())

# convert the object into a dict
territory_response_dict = territory_response_instance.to_dict()
# create an instance of TerritoryResponse from a dict
territory_response_from_dict = TerritoryResponse.from_dict(territory_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


