# AppsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[App]**](App.md) |  | 
**included** | [**List[AppResponseIncludedInner]**](AppResponseIncludedInner.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.apps_response import AppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppsResponse from a JSON string
apps_response_instance = AppsResponse.from_json(json)
# print the JSON string representation of the object
print(AppsResponse.to_json())

# convert the object into a dict
apps_response_dict = apps_response_instance.to_dict()
# create an instance of AppsResponse from a dict
apps_response_from_dict = AppsResponse.from_dict(apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


