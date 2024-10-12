# ClearBasicFilterRequest

Clears the basic filter, if any exists on the sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sheet_id** | **int** | The sheet ID on which the basic filter should be cleared. | [optional] 

## Example

```python
from openapi_client.models.clear_basic_filter_request import ClearBasicFilterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClearBasicFilterRequest from a JSON string
clear_basic_filter_request_instance = ClearBasicFilterRequest.from_json(json)
# print the JSON string representation of the object
print(ClearBasicFilterRequest.to_json())

# convert the object into a dict
clear_basic_filter_request_dict = clear_basic_filter_request_instance.to_dict()
# create an instance of ClearBasicFilterRequest from a dict
clear_basic_filter_request_from_dict = ClearBasicFilterRequest.from_dict(clear_basic_filter_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


