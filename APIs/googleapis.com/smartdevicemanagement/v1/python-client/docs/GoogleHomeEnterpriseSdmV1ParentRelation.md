# GoogleHomeEnterpriseSdmV1ParentRelation

Represents device relationships, for instance, structure/room to which the device is assigned to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to. | [optional] [readonly] 
**parent** | **str** | Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: \&quot;enterprises/XYZ/structures/ABC\&quot; or \&quot;enterprises/XYZ/structures/ABC/rooms/123\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_home_enterprise_sdm_v1_parent_relation import GoogleHomeEnterpriseSdmV1ParentRelation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleHomeEnterpriseSdmV1ParentRelation from a JSON string
google_home_enterprise_sdm_v1_parent_relation_instance = GoogleHomeEnterpriseSdmV1ParentRelation.from_json(json)
# print the JSON string representation of the object
print(GoogleHomeEnterpriseSdmV1ParentRelation.to_json())

# convert the object into a dict
google_home_enterprise_sdm_v1_parent_relation_dict = google_home_enterprise_sdm_v1_parent_relation_instance.to_dict()
# create an instance of GoogleHomeEnterpriseSdmV1ParentRelation from a dict
google_home_enterprise_sdm_v1_parent_relation_from_dict = GoogleHomeEnterpriseSdmV1ParentRelation.from_dict(google_home_enterprise_sdm_v1_parent_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


