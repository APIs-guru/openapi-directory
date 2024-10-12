# DetectorResponseCollection

Collection of detector responses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[DetectorResponse]**](DetectorResponse.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.detector_response_collection import DetectorResponseCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DetectorResponseCollection from a JSON string
detector_response_collection_instance = DetectorResponseCollection.from_json(json)
# print the JSON string representation of the object
print(DetectorResponseCollection.to_json())

# convert the object into a dict
detector_response_collection_dict = detector_response_collection_instance.to_dict()
# create an instance of DetectorResponseCollection from a dict
detector_response_collection_from_dict = DetectorResponseCollection.from_dict(detector_response_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


