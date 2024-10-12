# InfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**faces** | **int** |  | [optional] 
**has_credits_to_search** | **bool** |  | [optional] 
**is_online** | **bool** |  | [optional] 
**remaining_credits** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.info_response import InfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InfoResponse from a JSON string
info_response_instance = InfoResponse.from_json(json)
# print the JSON string representation of the object
print(InfoResponse.to_json())

# convert the object into a dict
info_response_dict = info_response_instance.to_dict()
# create an instance of InfoResponse from a dict
info_response_from_dict = InfoResponse.from_dict(info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


