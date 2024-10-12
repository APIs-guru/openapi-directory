# BatchGetBusinessCategoriesResponse

Response message for BusinessCategories.BatchGetBusinessCategories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[Category]**](Category.md) | Categories that match the GConcept ids provided in the request. They will not come in the same order as category ids in the request. | [optional] 

## Example

```python
from openapi_client.models.batch_get_business_categories_response import BatchGetBusinessCategoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetBusinessCategoriesResponse from a JSON string
batch_get_business_categories_response_instance = BatchGetBusinessCategoriesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetBusinessCategoriesResponse.to_json())

# convert the object into a dict
batch_get_business_categories_response_dict = batch_get_business_categories_response_instance.to_dict()
# create an instance of BatchGetBusinessCategoriesResponse from a dict
batch_get_business_categories_response_from_dict = BatchGetBusinessCategoriesResponse.from_dict(batch_get_business_categories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


