# DirectLineSite

A site for the Direct Line channel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | Whether this site is enabled for DirectLine channel. | 
**is_secure_site_enabled** | **bool** | Whether this site is enabled for authentication with Bot Framework. | [optional] 
**is_v1_enabled** | **bool** | Whether this site is enabled for Bot Framework V1 protocol. | 
**is_v3_enabled** | **bool** | Whether this site is enabled for Bot Framework V1 protocol. | 
**key** | **str** | Primary key. Value only returned through POST to the action Channel List API, otherwise empty. | [optional] [readonly] 
**key2** | **str** | Secondary key. Value only returned through POST to the action Channel List API, otherwise empty. | [optional] [readonly] 
**site_id** | **str** | Site Id | [optional] [readonly] 
**site_name** | **str** | Site name | 
**trusted_origins** | **List[str]** | List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True. | [optional] 

## Example

```python
from openapi_client.models.direct_line_site import DirectLineSite

# TODO update the JSON string below
json = "{}"
# create an instance of DirectLineSite from a JSON string
direct_line_site_instance = DirectLineSite.from_json(json)
# print the JSON string representation of the object
print(DirectLineSite.to_json())

# convert the object into a dict
direct_line_site_dict = direct_line_site_instance.to_dict()
# create an instance of DirectLineSite from a dict
direct_line_site_from_dict = DirectLineSite.from_dict(direct_line_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


