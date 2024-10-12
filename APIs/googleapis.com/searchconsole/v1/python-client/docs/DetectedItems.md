# DetectedItems

Rich Results items grouped by type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Item]**](Item.md) | List of Rich Results items. | [optional] 
**rich_result_type** | **str** | Rich Results type | [optional] 

## Example

```python
from openapi_client.models.detected_items import DetectedItems

# TODO update the JSON string below
json = "{}"
# create an instance of DetectedItems from a JSON string
detected_items_instance = DetectedItems.from_json(json)
# print the JSON string representation of the object
print(DetectedItems.to_json())

# convert the object into a dict
detected_items_dict = detected_items_instance.to_dict()
# create an instance of DetectedItems from a dict
detected_items_from_dict = DetectedItems.from_dict(detected_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


