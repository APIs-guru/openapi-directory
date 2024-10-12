# SizesListResponse

Size List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#sizesListResponse\&quot;. | [optional] 
**sizes** | [**List[Size]**](Size.md) | Size collection. | [optional] 

## Example

```python
from openapi_client.models.sizes_list_response import SizesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SizesListResponse from a JSON string
sizes_list_response_instance = SizesListResponse.from_json(json)
# print the JSON string representation of the object
print(SizesListResponse.to_json())

# convert the object into a dict
sizes_list_response_dict = sizes_list_response_instance.to_dict()
# create an instance of SizesListResponse from a dict
sizes_list_response_from_dict = SizesListResponse.from_dict(sizes_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


