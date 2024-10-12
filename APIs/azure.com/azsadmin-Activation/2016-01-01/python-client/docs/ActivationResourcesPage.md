# ActivationResourcesPage

Holds an array of activation resources and the next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[ActivationResource]**](ActivationResource.md) | List of activation resources. | [optional] 

## Example

```python
from openapi_client.models.activation_resources_page import ActivationResourcesPage

# TODO update the JSON string below
json = "{}"
# create an instance of ActivationResourcesPage from a JSON string
activation_resources_page_instance = ActivationResourcesPage.from_json(json)
# print the JSON string representation of the object
print(ActivationResourcesPage.to_json())

# convert the object into a dict
activation_resources_page_dict = activation_resources_page_instance.to_dict()
# create an instance of ActivationResourcesPage from a dict
activation_resources_page_from_dict = ActivationResourcesPage.from_dict(activation_resources_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


