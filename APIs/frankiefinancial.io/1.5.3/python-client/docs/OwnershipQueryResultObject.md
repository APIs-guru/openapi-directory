# OwnershipQueryResultObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associated_entities** | [**Dict[str, EntityObject]**](EntityObject.md) | List of all entities (both individuals and organisations) associated with this ownership result. These objects will be referenced by entityId in the shareholdings and officers lists in the following ownership details.  | [optional] 
**blocking_entity_ids** | **List[str]** | List of entity IDs (that should be in the associatedEntities list) who blocked the ultimate beneficial ownership tree traversal. These are likely to be entities that cannot be checked automatically (such as trusts) or who have no UBO&#39;s of their own, such as public companies.  The presence of data in this array also signifies that the full UBO list is not complete.  | [optional] 
**entity_id** | **str** | The entityId of the organisation for which this result was created. The details will be in the ownershipDetails map with this ID as the key.  | [optional] 
**ownership_details** | [**Dict[str, OwnershipDetailsObject]**](OwnershipDetailsObject.md) | A map of entityId to ownershipDetailsObjects with at least one entry being for the root organisation that the overall result relates to. Any remaining entries will be for further results for organisational owners referenced in the root ownershipDetailsObject and so on.  | [optional] 

## Example

```python
from openapi_client.models.ownership_query_result_object import OwnershipQueryResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of OwnershipQueryResultObject from a JSON string
ownership_query_result_object_instance = OwnershipQueryResultObject.from_json(json)
# print the JSON string representation of the object
print(OwnershipQueryResultObject.to_json())

# convert the object into a dict
ownership_query_result_object_dict = ownership_query_result_object_instance.to_dict()
# create an instance of OwnershipQueryResultObject from a dict
ownership_query_result_object_from_dict = OwnershipQueryResultObject.from_dict(ownership_query_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


