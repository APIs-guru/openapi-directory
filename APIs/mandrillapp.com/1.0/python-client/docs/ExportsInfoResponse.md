# ExportsInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**finished_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**result_url** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.exports_info_response import ExportsInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExportsInfoResponse from a JSON string
exports_info_response_instance = ExportsInfoResponse.from_json(json)
# print the JSON string representation of the object
print(ExportsInfoResponse.to_json())

# convert the object into a dict
exports_info_response_dict = exports_info_response_instance.to_dict()
# create an instance of ExportsInfoResponse from a dict
exports_info_response_from_dict = ExportsInfoResponse.from_dict(exports_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


