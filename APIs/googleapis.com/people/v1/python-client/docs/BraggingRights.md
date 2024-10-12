# BraggingRights

**DEPRECATED**: No data will be returned A person's bragging rights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The bragging rights; for example, &#x60;climbed mount everest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.bragging_rights import BraggingRights

# TODO update the JSON string below
json = "{}"
# create an instance of BraggingRights from a JSON string
bragging_rights_instance = BraggingRights.from_json(json)
# print the JSON string representation of the object
print(BraggingRights.to_json())

# convert the object into a dict
bragging_rights_dict = bragging_rights_instance.to_dict()
# create an instance of BraggingRights from a dict
bragging_rights_from_dict = BraggingRights.from_dict(bragging_rights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


