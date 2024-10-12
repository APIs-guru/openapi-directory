# SystraceSetup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_seconds** | **int** | Systrace duration in seconds. Should be between 1 and 30 seconds. 0 disables systrace. | [optional] 

## Example

```python
from openapi_client.models.systrace_setup import SystraceSetup

# TODO update the JSON string below
json = "{}"
# create an instance of SystraceSetup from a JSON string
systrace_setup_instance = SystraceSetup.from_json(json)
# print the JSON string representation of the object
print(SystraceSetup.to_json())

# convert the object into a dict
systrace_setup_dict = systrace_setup_instance.to_dict()
# create an instance of SystraceSetup from a dict
systrace_setup_from_dict = SystraceSetup.from_dict(systrace_setup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


