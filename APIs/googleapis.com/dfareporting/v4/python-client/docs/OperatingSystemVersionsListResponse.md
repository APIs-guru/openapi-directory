# OperatingSystemVersionsListResponse

Operating System Version List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#operatingSystemVersionsListResponse\&quot;. | [optional] 
**operating_system_versions** | [**List[OperatingSystemVersion]**](OperatingSystemVersion.md) | Operating system version collection. | [optional] 

## Example

```python
from openapi_client.models.operating_system_versions_list_response import OperatingSystemVersionsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperatingSystemVersionsListResponse from a JSON string
operating_system_versions_list_response_instance = OperatingSystemVersionsListResponse.from_json(json)
# print the JSON string representation of the object
print(OperatingSystemVersionsListResponse.to_json())

# convert the object into a dict
operating_system_versions_list_response_dict = operating_system_versions_list_response_instance.to_dict()
# create an instance of OperatingSystemVersionsListResponse from a dict
operating_system_versions_list_response_from_dict = OperatingSystemVersionsListResponse.from_dict(operating_system_versions_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


