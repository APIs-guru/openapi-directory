# DimensionValueList

Represents the list of DimensionValue resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The eTag of this response for caching purposes. | [optional] 
**items** | [**List[DimensionValue]**](DimensionValue.md) | The dimension values returned in this response. | [optional] 
**kind** | **str** | The kind of list this is, in this case dfareporting#dimensionValueList. | [optional] 
**next_page_token** | **str** | Continuation token used to page through dimension values. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. | [optional] 

## Example

```python
from openapi_client.models.dimension_value_list import DimensionValueList

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionValueList from a JSON string
dimension_value_list_instance = DimensionValueList.from_json(json)
# print the JSON string representation of the object
print(DimensionValueList.to_json())

# convert the object into a dict
dimension_value_list_dict = dimension_value_list_instance.to_dict()
# create an instance of DimensionValueList from a dict
dimension_value_list_from_dict = DimensionValueList.from_dict(dimension_value_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


