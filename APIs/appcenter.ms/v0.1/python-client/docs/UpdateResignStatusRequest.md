# UpdateResignStatusRequest

Updates the status of the resign request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Error code if an error occured in the resigning operation. | [optional] 
**error_message** | **str** | Error message if an error occured in the resigning operation. | [optional] 
**release_metadata** | **object** | releaseMetadata from ios resigner extractor | [optional] 
**status** | **str** | The updated status for the resigning request. | 

## Example

```python
from openapi_client.models.update_resign_status_request import UpdateResignStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateResignStatusRequest from a JSON string
update_resign_status_request_instance = UpdateResignStatusRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateResignStatusRequest.to_json())

# convert the object into a dict
update_resign_status_request_dict = update_resign_status_request_instance.to_dict()
# create an instance of UpdateResignStatusRequest from a dict
update_resign_status_request_from_dict = UpdateResignStatusRequest.from_dict(update_resign_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


