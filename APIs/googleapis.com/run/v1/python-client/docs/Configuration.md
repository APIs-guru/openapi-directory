# Configuration

Configuration represents the \"floating HEAD\" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The \"latest created\" revision's name is available under status, as is the \"latest ready\" revision's name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call such as \&quot;serving.knative.dev/v1\&quot;. | [optional] 
**kind** | **str** | The kind of resource, in this case always \&quot;Configuration\&quot;. | [optional] 
**metadata** | [**ObjectMeta**](ObjectMeta.md) |  | [optional] 
**spec** | [**ConfigurationSpec**](ConfigurationSpec.md) |  | [optional] 
**status** | [**ConfigurationStatus**](ConfigurationStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.configuration import Configuration

# TODO update the JSON string below
json = "{}"
# create an instance of Configuration from a JSON string
configuration_instance = Configuration.from_json(json)
# print the JSON string representation of the object
print(Configuration.to_json())

# convert the object into a dict
configuration_dict = configuration_instance.to_dict()
# create an instance of Configuration from a dict
configuration_from_dict = Configuration.from_dict(configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


