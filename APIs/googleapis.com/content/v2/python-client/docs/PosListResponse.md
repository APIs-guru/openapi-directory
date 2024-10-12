# PosListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#posListResponse\&quot;. | [optional] 
**resources** | [**List[PosStore]**](PosStore.md) |  | [optional] 

## Example

```python
from openapi_client.models.pos_list_response import PosListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PosListResponse from a JSON string
pos_list_response_instance = PosListResponse.from_json(json)
# print the JSON string representation of the object
print(PosListResponse.to_json())

# convert the object into a dict
pos_list_response_dict = pos_list_response_instance.to_dict()
# create an instance of PosListResponse from a dict
pos_list_response_from_dict = PosListResponse.from_dict(pos_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


