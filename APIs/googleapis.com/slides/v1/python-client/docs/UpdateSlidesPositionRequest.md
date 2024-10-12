# UpdateSlidesPositionRequest

Updates the position of slides in the presentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insertion_index** | **int** | The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be between zero and the number of slides in the presentation, inclusive. | [optional] 
**slide_object_ids** | **List[str]** | The IDs of the slides in the presentation that should be moved. The slides in this list must be in existing presentation order, without duplicates. | [optional] 

## Example

```python
from openapi_client.models.update_slides_position_request import UpdateSlidesPositionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSlidesPositionRequest from a JSON string
update_slides_position_request_instance = UpdateSlidesPositionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSlidesPositionRequest.to_json())

# convert the object into a dict
update_slides_position_request_dict = update_slides_position_request_instance.to_dict()
# create an instance of UpdateSlidesPositionRequest from a dict
update_slides_position_request_from_dict = UpdateSlidesPositionRequest.from_dict(update_slides_position_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


