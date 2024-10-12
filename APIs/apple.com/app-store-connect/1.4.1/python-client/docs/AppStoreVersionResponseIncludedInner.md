# AppStoreVersionResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**IdfaDeclarationAttributes**](IdfaDeclarationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 
**relationships** | [**AppStoreVersionSubmissionRelationships**](AppStoreVersionSubmissionRelationships.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_response_included_inner import AppStoreVersionResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionResponseIncludedInner from a JSON string
app_store_version_response_included_inner_instance = AppStoreVersionResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionResponseIncludedInner.to_json())

# convert the object into a dict
app_store_version_response_included_inner_dict = app_store_version_response_included_inner_instance.to_dict()
# create an instance of AppStoreVersionResponseIncludedInner from a dict
app_store_version_response_included_inner_from_dict = AppStoreVersionResponseIncludedInner.from_dict(app_store_version_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


