# CreateItemResponse

The result of creating an item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **str** | The ID of the created item. | [optional] 
**question_id** | **List[str]** | The ID of the question created as part of this item, for a question group it lists IDs of all the questions created for this item. | [optional] 

## Example

```python
from openapi_client.models.create_item_response import CreateItemResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateItemResponse from a JSON string
create_item_response_instance = CreateItemResponse.from_json(json)
# print the JSON string representation of the object
print(CreateItemResponse.to_json())

# convert the object into a dict
create_item_response_dict = create_item_response_instance.to_dict()
# create an instance of CreateItemResponse from a dict
create_item_response_from_dict = CreateItemResponse.from_dict(create_item_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


