# EnterprisesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enterprise** | [**List[Enterprise]**](Enterprise.md) | An enterprise. | [optional] 

## Example

```python
from openapi_client.models.enterprises_list_response import EnterprisesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EnterprisesListResponse from a JSON string
enterprises_list_response_instance = EnterprisesListResponse.from_json(json)
# print the JSON string representation of the object
print(EnterprisesListResponse.to_json())

# convert the object into a dict
enterprises_list_response_dict = enterprises_list_response_instance.to_dict()
# create an instance of EnterprisesListResponse from a dict
enterprises_list_response_from_dict = EnterprisesListResponse.from_dict(enterprises_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


