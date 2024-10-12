# EnterpriseTopazFrontendTeamsLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The identifying link type | [optional] 
**url** | [**SafeUrlProto**](SafeUrlProto.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_frontend_teams_link import EnterpriseTopazFrontendTeamsLink

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazFrontendTeamsLink from a JSON string
enterprise_topaz_frontend_teams_link_instance = EnterpriseTopazFrontendTeamsLink.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazFrontendTeamsLink.to_json())

# convert the object into a dict
enterprise_topaz_frontend_teams_link_dict = enterprise_topaz_frontend_teams_link_instance.to_dict()
# create an instance of EnterpriseTopazFrontendTeamsLink from a dict
enterprise_topaz_frontend_teams_link_from_dict = EnterpriseTopazFrontendTeamsLink.from_dict(enterprise_topaz_frontend_teams_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


