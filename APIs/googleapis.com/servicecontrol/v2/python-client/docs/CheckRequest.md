# CheckRequest

Request message for the Check method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AttributeContext**](AttributeContext.md) |  | [optional] 
**flags** | **str** | Optional. Contains a comma-separated list of flags. | [optional] 
**resources** | [**List[ResourceInfo]**](ResourceInfo.md) | Describes the resources and the policies applied to each resource. | [optional] 
**service_config_id** | **str** | Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to &#39;latest&#39; to specify using the latest configuration. | [optional] 

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


