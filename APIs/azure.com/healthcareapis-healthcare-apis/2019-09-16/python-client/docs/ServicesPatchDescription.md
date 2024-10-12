# ServicesPatchDescription

The description of the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Instance tags | [optional] 

## Example

```python
from openapi_client.models.services_patch_description import ServicesPatchDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesPatchDescription from a JSON string
services_patch_description_instance = ServicesPatchDescription.from_json(json)
# print the JSON string representation of the object
print(ServicesPatchDescription.to_json())

# convert the object into a dict
services_patch_description_dict = services_patch_description_instance.to_dict()
# create an instance of ServicesPatchDescription from a dict
services_patch_description_from_dict = ServicesPatchDescription.from_dict(services_patch_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


