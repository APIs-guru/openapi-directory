# Namespaces

A list of Kubernetes Namespaces

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespaces** | **List[str]** | Optional. A list of Kubernetes Namespaces | [optional] 

## Example

```python
from openapi_client.models.namespaces import Namespaces

# TODO update the JSON string below
json = "{}"
# create an instance of Namespaces from a JSON string
namespaces_instance = Namespaces.from_json(json)
# print the JSON string representation of the object
print(Namespaces.to_json())

# convert the object into a dict
namespaces_dict = namespaces_instance.to_dict()
# create an instance of Namespaces from a dict
namespaces_from_dict = Namespaces.from_dict(namespaces_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


