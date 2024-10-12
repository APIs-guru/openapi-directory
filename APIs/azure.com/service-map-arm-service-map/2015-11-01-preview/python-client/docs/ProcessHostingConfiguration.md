# ProcessHostingConfiguration

Describes the hosting configuration of a process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Additional hosting configuration type qualifier. | 
**provider** | **str** | The hosting provider of the VM. | [optional] 

## Example

```python
from openapi_client.models.process_hosting_configuration import ProcessHostingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessHostingConfiguration from a JSON string
process_hosting_configuration_instance = ProcessHostingConfiguration.from_json(json)
# print the JSON string representation of the object
print(ProcessHostingConfiguration.to_json())

# convert the object into a dict
process_hosting_configuration_dict = process_hosting_configuration_instance.to_dict()
# create an instance of ProcessHostingConfiguration from a dict
process_hosting_configuration_from_dict = ProcessHostingConfiguration.from_dict(process_hosting_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


