# OSes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oses** | [**List[AnalyticsOperatingSystemCounts200ResponseOsesInner]**](AnalyticsOperatingSystemCounts200ResponseOsesInner.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.o_ses import OSes

# TODO update the JSON string below
json = "{}"
# create an instance of OSes from a JSON string
o_ses_instance = OSes.from_json(json)
# print the JSON string representation of the object
print(OSes.to_json())

# convert the object into a dict
o_ses_dict = o_ses_instance.to_dict()
# create an instance of OSes from a dict
o_ses_from_dict = OSes.from_dict(o_ses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


