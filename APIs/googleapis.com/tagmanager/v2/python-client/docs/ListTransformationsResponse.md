# ListTransformationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 
**transformation** | [**List[Transformation]**](Transformation.md) | All GTM Transformations of a GTM Container. | [optional] 

## Example

```python
from openapi_client.models.list_transformations_response import ListTransformationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTransformationsResponse from a JSON string
list_transformations_response_instance = ListTransformationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTransformationsResponse.to_json())

# convert the object into a dict
list_transformations_response_dict = list_transformations_response_instance.to_dict()
# create an instance of ListTransformationsResponse from a dict
list_transformations_response_from_dict = ListTransformationsResponse.from_dict(list_transformations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


