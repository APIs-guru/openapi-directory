# CashtagEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** | Index (zero-based) at which position this entity ends.  The index is exclusive. | 
**start** | **int** | Index (zero-based) at which position this entity starts.  The index is inclusive. | 
**tag** | **str** |  | 

## Example

```python
from openapi_client.models.cashtag_entity import CashtagEntity

# TODO update the JSON string below
json = "{}"
# create an instance of CashtagEntity from a JSON string
cashtag_entity_instance = CashtagEntity.from_json(json)
# print the JSON string representation of the object
print(CashtagEntity.to_json())

# convert the object into a dict
cashtag_entity_dict = cashtag_entity_instance.to_dict()
# create an instance of CashtagEntity from a dict
cashtag_entity_from_dict = CashtagEntity.from_dict(cashtag_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


