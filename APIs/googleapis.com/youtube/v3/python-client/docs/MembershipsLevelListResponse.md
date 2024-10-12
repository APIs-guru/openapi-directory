# MembershipsLevelListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[MembershipsLevel]**](MembershipsLevel.md) | A list of pricing levels offered by a creator to the fans. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#membershipsLevelListResponse\&quot;. | [optional] [default to 'youtube#membershipsLevelListResponse']
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.memberships_level_list_response import MembershipsLevelListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipsLevelListResponse from a JSON string
memberships_level_list_response_instance = MembershipsLevelListResponse.from_json(json)
# print the JSON string representation of the object
print(MembershipsLevelListResponse.to_json())

# convert the object into a dict
memberships_level_list_response_dict = memberships_level_list_response_instance.to_dict()
# create an instance of MembershipsLevelListResponse from a dict
memberships_level_list_response_from_dict = MembershipsLevelListResponse.from_dict(memberships_level_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


