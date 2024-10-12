# SetBasicFilterRequest

Sets the basic filter associated with a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**BasicFilter**](BasicFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_basic_filter_request import SetBasicFilterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetBasicFilterRequest from a JSON string
set_basic_filter_request_instance = SetBasicFilterRequest.from_json(json)
# print the JSON string representation of the object
print(SetBasicFilterRequest.to_json())

# convert the object into a dict
set_basic_filter_request_dict = set_basic_filter_request_instance.to_dict()
# create an instance of SetBasicFilterRequest from a dict
set_basic_filter_request_from_dict = SetBasicFilterRequest.from_dict(set_basic_filter_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


