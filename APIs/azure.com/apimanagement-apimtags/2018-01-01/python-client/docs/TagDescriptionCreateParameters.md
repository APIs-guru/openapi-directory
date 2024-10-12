# TagDescriptionCreateParameters

Parameters supplied to the Create TagDescription operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagDescriptionBaseProperties**](TagDescriptionBaseProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_description_create_parameters import TagDescriptionCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TagDescriptionCreateParameters from a JSON string
tag_description_create_parameters_instance = TagDescriptionCreateParameters.from_json(json)
# print the JSON string representation of the object
print(TagDescriptionCreateParameters.to_json())

# convert the object into a dict
tag_description_create_parameters_dict = tag_description_create_parameters_instance.to_dict()
# create an instance of TagDescriptionCreateParameters from a dict
tag_description_create_parameters_from_dict = TagDescriptionCreateParameters.from_dict(tag_description_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


