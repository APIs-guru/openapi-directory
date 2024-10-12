# ReturnpolicyListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#returnpolicyListResponse&#x60;\&quot;. | [optional] 
**resources** | [**List[ReturnPolicy]**](ReturnPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.returnpolicy_list_response import ReturnpolicyListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnpolicyListResponse from a JSON string
returnpolicy_list_response_instance = ReturnpolicyListResponse.from_json(json)
# print the JSON string representation of the object
print(ReturnpolicyListResponse.to_json())

# convert the object into a dict
returnpolicy_list_response_dict = returnpolicy_list_response_instance.to_dict()
# create an instance of ReturnpolicyListResponse from a dict
returnpolicy_list_response_from_dict = ReturnpolicyListResponse.from_dict(returnpolicy_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


