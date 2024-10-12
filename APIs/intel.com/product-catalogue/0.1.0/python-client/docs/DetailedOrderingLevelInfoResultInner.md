# DetailedOrderingLevelInfoResultInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[DetailedOrderingLevelInfoResultInnerAttributesInner]**](DetailedOrderingLevelInfoResultInnerAttributesInner.md) |  | [optional] 
**product_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.detailed_ordering_level_info_result_inner import DetailedOrderingLevelInfoResultInner

# TODO update the JSON string below
json = "{}"
# create an instance of DetailedOrderingLevelInfoResultInner from a JSON string
detailed_ordering_level_info_result_inner_instance = DetailedOrderingLevelInfoResultInner.from_json(json)
# print the JSON string representation of the object
print(DetailedOrderingLevelInfoResultInner.to_json())

# convert the object into a dict
detailed_ordering_level_info_result_inner_dict = detailed_ordering_level_info_result_inner_instance.to_dict()
# create an instance of DetailedOrderingLevelInfoResultInner from a dict
detailed_ordering_level_info_result_inner_from_dict = DetailedOrderingLevelInfoResultInner.from_dict(detailed_ordering_level_info_result_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


