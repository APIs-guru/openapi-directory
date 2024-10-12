# NotOutdoorsFailureDetails

Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **str** | Relative time (from the start of the video stream) when an indoor frame was found. | [optional] 

## Example

```python
from openapi_client.models.not_outdoors_failure_details import NotOutdoorsFailureDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NotOutdoorsFailureDetails from a JSON string
not_outdoors_failure_details_instance = NotOutdoorsFailureDetails.from_json(json)
# print the JSON string representation of the object
print(NotOutdoorsFailureDetails.to_json())

# convert the object into a dict
not_outdoors_failure_details_dict = not_outdoors_failure_details_instance.to_dict()
# create an instance of NotOutdoorsFailureDetails from a dict
not_outdoors_failure_details_from_dict = NotOutdoorsFailureDetails.from_dict(not_outdoors_failure_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


