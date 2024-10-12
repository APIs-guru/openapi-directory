# ListConfigurationsResponse

ListConfigurationsResponse is a list of Configuration resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call such as \&quot;serving.knative.dev/v1\&quot;. | [optional] 
**items** | [**List[Configuration]**](Configuration.md) | List of Configurations. | [optional] 
**kind** | **str** | The kind of this resource, in this case \&quot;ConfigurationList\&quot;. | [optional] 
**metadata** | [**ListMeta**](ListMeta.md) |  | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_configurations_response import ListConfigurationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConfigurationsResponse from a JSON string
list_configurations_response_instance = ListConfigurationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConfigurationsResponse.to_json())

# convert the object into a dict
list_configurations_response_dict = list_configurations_response_instance.to_dict()
# create an instance of ListConfigurationsResponse from a dict
list_configurations_response_from_dict = ListConfigurationsResponse.from_dict(list_configurations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


