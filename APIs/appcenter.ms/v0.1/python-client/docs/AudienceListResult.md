# AudienceListResult

List of audiences.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** |  | [optional] 
**values** | [**List[AnalyticsListAudiences200ResponseValuesInner]**](AnalyticsListAudiences200ResponseValuesInner.md) | List of audiences. | 

## Example

```python
from openapi_client.models.audience_list_result import AudienceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceListResult from a JSON string
audience_list_result_instance = AudienceListResult.from_json(json)
# print the JSON string representation of the object
print(AudienceListResult.to_json())

# convert the object into a dict
audience_list_result_dict = audience_list_result_instance.to_dict()
# create an instance of AudienceListResult from a dict
audience_list_result_from_dict = AudienceListResult.from_dict(audience_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


