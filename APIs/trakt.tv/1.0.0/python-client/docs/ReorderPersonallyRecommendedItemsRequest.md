# ReorderPersonallyRecommendedItemsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rank** | **List[float]** |  | [optional] 

## Example

```python
from openapi_client.models.reorder_personally_recommended_items_request import ReorderPersonallyRecommendedItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReorderPersonallyRecommendedItemsRequest from a JSON string
reorder_personally_recommended_items_request_instance = ReorderPersonallyRecommendedItemsRequest.from_json(json)
# print the JSON string representation of the object
print(ReorderPersonallyRecommendedItemsRequest.to_json())

# convert the object into a dict
reorder_personally_recommended_items_request_dict = reorder_personally_recommended_items_request_instance.to_dict()
# create an instance of ReorderPersonallyRecommendedItemsRequest from a dict
reorder_personally_recommended_items_request_from_dict = ReorderPersonallyRecommendedItemsRequest.from_dict(reorder_personally_recommended_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


