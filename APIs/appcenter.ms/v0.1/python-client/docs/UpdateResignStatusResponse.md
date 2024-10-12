# UpdateResignStatusResponse

URL that can be used to check the status of the update devices operation and the updated profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profiles_zip_base64** | **str** | A zip of the updated provisioning profiles. Base64 encoded. | [optional] 
**status** | **str** | The status. | 

## Example

```python
from openapi_client.models.update_resign_status_response import UpdateResignStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateResignStatusResponse from a JSON string
update_resign_status_response_instance = UpdateResignStatusResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateResignStatusResponse.to_json())

# convert the object into a dict
update_resign_status_response_dict = update_resign_status_response_instance.to_dict()
# create an instance of UpdateResignStatusResponse from a dict
update_resign_status_response_from_dict = UpdateResignStatusResponse.from_dict(update_resign_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


