# UpdateCheckResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_info** | [**CodePushAcquisitionUpdateCheck200ResponseUpdateInfo**](CodePushAcquisitionUpdateCheck200ResponseUpdateInfo.md) |  | 

## Example

```python
from openapi_client.models.update_check_response import UpdateCheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCheckResponse from a JSON string
update_check_response_instance = UpdateCheckResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCheckResponse.to_json())

# convert the object into a dict
update_check_response_dict = update_check_response_instance.to_dict()
# create an instance of UpdateCheckResponse from a dict
update_check_response_from_dict = UpdateCheckResponse.from_dict(update_check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


