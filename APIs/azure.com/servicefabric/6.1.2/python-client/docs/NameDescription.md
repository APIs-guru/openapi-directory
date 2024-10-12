# NameDescription

Describes a Service Fabric name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The Service Fabric name, including the &#39;fabric:&#39; URI scheme. | 

## Example

```python
from openapi_client.models.name_description import NameDescription

# TODO update the JSON string below
json = "{}"
# create an instance of NameDescription from a JSON string
name_description_instance = NameDescription.from_json(json)
# print the JSON string representation of the object
print(NameDescription.to_json())

# convert the object into a dict
name_description_dict = name_description_instance.to_dict()
# create an instance of NameDescription from a dict
name_description_from_dict = NameDescription.from_dict(name_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


