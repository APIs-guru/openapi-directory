# ProcessHostedService

A service hosted by a process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The service&#39;s display name. | [optional] 
**name** | **str** | The name of the service. | [optional] 

## Example

```python
from openapi_client.models.process_hosted_service import ProcessHostedService

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessHostedService from a JSON string
process_hosted_service_instance = ProcessHostedService.from_json(json)
# print the JSON string representation of the object
print(ProcessHostedService.to_json())

# convert the object into a dict
process_hosted_service_dict = process_hosted_service_instance.to_dict()
# create an instance of ProcessHostedService from a dict
process_hosted_service_from_dict = ProcessHostedService.from_dict(process_hosted_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


