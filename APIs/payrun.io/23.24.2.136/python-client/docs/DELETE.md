# DELETE

The batch job instructions' instructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**List[DELETEDELETEInner]**](DELETEDELETEInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete import DELETE

# TODO update the JSON string below
json = "{}"
# create an instance of DELETE from a JSON string
delete_instance = DELETE.from_json(json)
# print the JSON string representation of the object
print(DELETE.to_json())

# convert the object into a dict
delete_dict = delete_instance.to_dict()
# create an instance of DELETE from a dict
delete_from_dict = DELETE.from_dict(delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


