# PlatformTypesListResponse

Platform Type List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#platformTypesListResponse\&quot;. | [optional] 
**platform_types** | [**List[PlatformType]**](PlatformType.md) | Platform type collection. | [optional] 

## Example

```python
from openapi_client.models.platform_types_list_response import PlatformTypesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformTypesListResponse from a JSON string
platform_types_list_response_instance = PlatformTypesListResponse.from_json(json)
# print the JSON string representation of the object
print(PlatformTypesListResponse.to_json())

# convert the object into a dict
platform_types_list_response_dict = platform_types_list_response_instance.to_dict()
# create an instance of PlatformTypesListResponse from a dict
platform_types_list_response_from_dict = PlatformTypesListResponse.from_dict(platform_types_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


