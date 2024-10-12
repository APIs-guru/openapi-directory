# EntityProfileItemMatchResultObject

Match summary for a single checked address or document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checked** | **bool** | True if an attempt was made to verify | [optional] 
**match_count** | **int** | The number of distinct sources that matched this address or document | [optional] 
**match_sources** | **List[str]** | List of sources that matched. The matchCount will be the number of entries in this list.  | [optional] 
**match_type** | **str** | The match type that this count and result refer to. For document matches this will be \&quot;gov_id\&quot; or \&quot;other_id\&quot;. For addresses ir will be \&quot;curr_addr\&quot; or \&quot;prev_addr\&quot; depending on the status of the address at the time of the check.  | [optional] 
**verified** | **bool** | True if there is at least one match | [optional] 

## Example

```python
from openapi_client.models.entity_profile_item_match_result_object import EntityProfileItemMatchResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityProfileItemMatchResultObject from a JSON string
entity_profile_item_match_result_object_instance = EntityProfileItemMatchResultObject.from_json(json)
# print the JSON string representation of the object
print(EntityProfileItemMatchResultObject.to_json())

# convert the object into a dict
entity_profile_item_match_result_object_dict = entity_profile_item_match_result_object_instance.to_dict()
# create an instance of EntityProfileItemMatchResultObject from a dict
entity_profile_item_match_result_object_from_dict = EntityProfileItemMatchResultObject.from_dict(entity_profile_item_match_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


