# CheckRequest

Request message for the Check method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Operation**](Operation.md) |  | [optional] 
**request_project_settings** | **bool** | Requests the project settings to be returned as part of the check response. | [optional] 
**service_config_id** | **str** | Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used. | [optional] 
**skip_activation_check** | **bool** | Indicates if service activation check should be skipped for this request. Default behavior is to perform the check and apply relevant quota. WARNING: Setting this flag to \&quot;true\&quot; will disable quota enforcement. | [optional] 

## Example

```python
from openapi_client.models.check_request import CheckRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckRequest from a JSON string
check_request_instance = CheckRequest.from_json(json)
# print the JSON string representation of the object
print(CheckRequest.to_json())

# convert the object into a dict
check_request_dict = check_request_instance.to_dict()
# create an instance of CheckRequest from a dict
check_request_from_dict = CheckRequest.from_dict(check_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


