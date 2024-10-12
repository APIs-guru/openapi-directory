# StatusBanner

Banner type of emerging issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud** | **str** | The cloud type of this banner. | [optional] 
**last_modified_time** | **datetime** | The last time modified on this banner. | [optional] 
**message** | **str** | The details of banner. | [optional] 
**title** | **str** | The banner title. | [optional] 

## Example

```python
from openapi_client.models.status_banner import StatusBanner

# TODO update the JSON string below
json = "{}"
# create an instance of StatusBanner from a JSON string
status_banner_instance = StatusBanner.from_json(json)
# print the JSON string representation of the object
print(StatusBanner.to_json())

# convert the object into a dict
status_banner_dict = status_banner_instance.to_dict()
# create an instance of StatusBanner from a dict
status_banner_from_dict = StatusBanner.from_dict(status_banner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


