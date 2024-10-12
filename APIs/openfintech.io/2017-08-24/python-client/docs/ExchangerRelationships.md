# ExchangerRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization** | [**ExchangerOrganization**](ExchangerOrganization.md) |  | [optional] 

## Example

```python
from openapi_client.models.exchanger_relationships import ExchangerRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangerRelationships from a JSON string
exchanger_relationships_instance = ExchangerRelationships.from_json(json)
# print the JSON string representation of the object
print(ExchangerRelationships.to_json())

# convert the object into a dict
exchanger_relationships_dict = exchanger_relationships_instance.to_dict()
# create an instance of ExchangerRelationships from a dict
exchanger_relationships_from_dict = ExchangerRelationships.from_dict(exchanger_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


