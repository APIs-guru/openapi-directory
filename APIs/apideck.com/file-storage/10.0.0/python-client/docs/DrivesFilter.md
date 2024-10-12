# DrivesFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | ID of the drive group to filter on | [optional] 

## Example

```python
from openapi_client.models.drives_filter import DrivesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DrivesFilter from a JSON string
drives_filter_instance = DrivesFilter.from_json(json)
# print the JSON string representation of the object
print(DrivesFilter.to_json())

# convert the object into a dict
drives_filter_dict = drives_filter_instance.to_dict()
# create an instance of DrivesFilter from a dict
drives_filter_from_dict = DrivesFilter.from_dict(drives_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


