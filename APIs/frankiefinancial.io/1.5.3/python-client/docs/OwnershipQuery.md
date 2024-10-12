# OwnershipQuery

Details of the organisation for which ownership should be queried. This should at least contain the ACN in the externalIds. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organisation** | [**EntityObject**](EntityObject.md) |  | 

## Example

```python
from openapi_client.models.ownership_query import OwnershipQuery

# TODO update the JSON string below
json = "{}"
# create an instance of OwnershipQuery from a JSON string
ownership_query_instance = OwnershipQuery.from_json(json)
# print the JSON string representation of the object
print(OwnershipQuery.to_json())

# convert the object into a dict
ownership_query_dict = ownership_query_instance.to_dict()
# create an instance of OwnershipQuery from a dict
ownership_query_from_dict = OwnershipQuery.from_dict(ownership_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


