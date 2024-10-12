# ApiWarning

An Admin API warning message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code to uniquely identify the warning type. | [optional] 
**message** | **str** | The warning message. | [optional] 
**region** | **str** | The region name for REGION_UNREACHABLE warning. | [optional] 

## Example

```python
from openapi_client.models.api_warning import ApiWarning

# TODO update the JSON string below
json = "{}"
# create an instance of ApiWarning from a JSON string
api_warning_instance = ApiWarning.from_json(json)
# print the JSON string representation of the object
print(ApiWarning.to_json())

# convert the object into a dict
api_warning_dict = api_warning_instance.to_dict()
# create an instance of ApiWarning from a dict
api_warning_from_dict = ApiWarning.from_dict(api_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


