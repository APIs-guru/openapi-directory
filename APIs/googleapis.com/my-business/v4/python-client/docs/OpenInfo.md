# OpenInfo

Information related to the opening state of the business.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_reopen** | **bool** | Output only. Indicates whether this business is eligible for re-open. | [optional] 
**opening_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**status** | **str** | Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed. | [optional] 

## Example

```python
from openapi_client.models.open_info import OpenInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OpenInfo from a JSON string
open_info_instance = OpenInfo.from_json(json)
# print the JSON string representation of the object
print(OpenInfo.to_json())

# convert the object into a dict
open_info_dict = open_info_instance.to_dict()
# create an instance of OpenInfo from a dict
open_info_from_dict = OpenInfo.from_dict(open_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


