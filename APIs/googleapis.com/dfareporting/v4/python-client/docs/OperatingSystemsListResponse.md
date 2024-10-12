# OperatingSystemsListResponse

Operating System List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#operatingSystemsListResponse\&quot;. | [optional] 
**operating_systems** | [**List[OperatingSystem]**](OperatingSystem.md) | Operating system collection. | [optional] 

## Example

```python
from openapi_client.models.operating_systems_list_response import OperatingSystemsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperatingSystemsListResponse from a JSON string
operating_systems_list_response_instance = OperatingSystemsListResponse.from_json(json)
# print the JSON string representation of the object
print(OperatingSystemsListResponse.to_json())

# convert the object into a dict
operating_systems_list_response_dict = operating_systems_list_response_instance.to_dict()
# create an instance of OperatingSystemsListResponse from a dict
operating_systems_list_response_from_dict = OperatingSystemsListResponse.from_dict(operating_systems_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


