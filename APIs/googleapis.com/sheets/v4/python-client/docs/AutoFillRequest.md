# AutoFillRequest

Fills in more data based on existing data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**source_and_destination** | [**SourceAndDestination**](SourceAndDestination.md) |  | [optional] 
**use_alternate_series** | **bool** | True if we should generate data with the \&quot;alternate\&quot; series. This differs based on the type and amount of source data. | [optional] 

## Example

```python
from openapi_client.models.auto_fill_request import AutoFillRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AutoFillRequest from a JSON string
auto_fill_request_instance = AutoFillRequest.from_json(json)
# print the JSON string representation of the object
print(AutoFillRequest.to_json())

# convert the object into a dict
auto_fill_request_dict = auto_fill_request_instance.to_dict()
# create an instance of AutoFillRequest from a dict
auto_fill_request_from_dict = AutoFillRequest.from_dict(auto_fill_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


