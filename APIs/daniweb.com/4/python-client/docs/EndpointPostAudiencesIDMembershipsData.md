# EndpointPostAudiencesIDMembershipsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | [**EndpointPostAudiencesIDMembershipsDataAudience**](EndpointPostAudiencesIDMembershipsDataAudience.md) |  | [optional] 
**member** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_audiences_id_memberships_data import EndpointPostAudiencesIDMembershipsData

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostAudiencesIDMembershipsData from a JSON string
endpoint_post_audiences_id_memberships_data_instance = EndpointPostAudiencesIDMembershipsData.from_json(json)
# print the JSON string representation of the object
print(EndpointPostAudiencesIDMembershipsData.to_json())

# convert the object into a dict
endpoint_post_audiences_id_memberships_data_dict = endpoint_post_audiences_id_memberships_data_instance.to_dict()
# create an instance of EndpointPostAudiencesIDMembershipsData from a dict
endpoint_post_audiences_id_memberships_data_from_dict = EndpointPostAudiencesIDMembershipsData.from_dict(endpoint_post_audiences_id_memberships_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


