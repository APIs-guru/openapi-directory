# IntuneAppCategoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID for the category. | [optional] 
**name** | **str** | display name for the app category | [optional] 

## Example

```python
from openapi_client.models.intune_app_category_response import IntuneAppCategoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneAppCategoryResponse from a JSON string
intune_app_category_response_instance = IntuneAppCategoryResponse.from_json(json)
# print the JSON string representation of the object
print(IntuneAppCategoryResponse.to_json())

# convert the object into a dict
intune_app_category_response_dict = intune_app_category_response_instance.to_dict()
# create an instance of IntuneAppCategoryResponse from a dict
intune_app_category_response_from_dict = IntuneAppCategoryResponse.from_dict(intune_app_category_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


