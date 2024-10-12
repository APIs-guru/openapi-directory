# BatchUpdatePresentationRequest

Request message for PresentationsService.BatchUpdatePresentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[Request]**](Request.md) | A list of updates to apply to the presentation. | [optional] 
**write_control** | [**WriteControl**](WriteControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_update_presentation_request import BatchUpdatePresentationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdatePresentationRequest from a JSON string
batch_update_presentation_request_instance = BatchUpdatePresentationRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdatePresentationRequest.to_json())

# convert the object into a dict
batch_update_presentation_request_dict = batch_update_presentation_request_instance.to_dict()
# create an instance of BatchUpdatePresentationRequest from a dict
batch_update_presentation_request_from_dict = BatchUpdatePresentationRequest.from_dict(batch_update_presentation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


