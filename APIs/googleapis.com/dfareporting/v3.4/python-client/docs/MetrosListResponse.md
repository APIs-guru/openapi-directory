# MetrosListResponse

Metro List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#metrosListResponse\&quot;. | [optional] 
**metros** | [**List[Metro]**](Metro.md) | Metro collection. | [optional] 

## Example

```python
from openapi_client.models.metros_list_response import MetrosListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MetrosListResponse from a JSON string
metros_list_response_instance = MetrosListResponse.from_json(json)
# print the JSON string representation of the object
print(MetrosListResponse.to_json())

# convert the object into a dict
metros_list_response_dict = metros_list_response_instance.to_dict()
# create an instance of MetrosListResponse from a dict
metros_list_response_from_dict = MetrosListResponse.from_dict(metros_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


