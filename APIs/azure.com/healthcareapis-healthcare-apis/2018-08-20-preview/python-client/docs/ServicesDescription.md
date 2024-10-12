# ServicesDescription

The description of the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServicesProperties**](ServicesProperties.md) |  | [optional] 
**etag** | **str** | An etag associated with the resource, used for optimistic concurrency when editing it. | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**kind** | **str** | The kind of the service. Valid values are: fhir, fhir-Stu3 and fhir-R4. | 
**location** | **str** | The resource location. | 
**name** | **str** | The resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.services_description import ServicesDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesDescription from a JSON string
services_description_instance = ServicesDescription.from_json(json)
# print the JSON string representation of the object
print(ServicesDescription.to_json())

# convert the object into a dict
services_description_dict = services_description_instance.to_dict()
# create an instance of ServicesDescription from a dict
services_description_from_dict = ServicesDescription.from_dict(services_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


