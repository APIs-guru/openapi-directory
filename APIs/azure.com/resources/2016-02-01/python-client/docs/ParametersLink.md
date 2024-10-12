# ParametersLink

Entity representing the reference to the deployment parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_version** | **str** | If included it must match the ContentVersion in the template. | [optional] 
**uri** | **str** | URI referencing the template. | 

## Example

```python
from openapi_client.models.parameters_link import ParametersLink

# TODO update the JSON string below
json = "{}"
# create an instance of ParametersLink from a JSON string
parameters_link_instance = ParametersLink.from_json(json)
# print the JSON string representation of the object
print(ParametersLink.to_json())

# convert the object into a dict
parameters_link_dict = parameters_link_instance.to_dict()
# create an instance of ParametersLink from a dict
parameters_link_from_dict = ParametersLink.from_dict(parameters_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


