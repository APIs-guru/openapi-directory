# Aspect

The type that defines the fields for the name/value pairs for the aspects of the product. For example: BRAND/Apple

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_name** | **str** | The text representing the name of the aspect for the name/value pair, such as Brand. | [optional] 
**localized_values** | **List[str]** | The text representing the value of the aspect for the name/value pair, such as Apple. | [optional] 

## Example

```python
from openapi_client.models.aspect import Aspect

# TODO update the JSON string below
json = "{}"
# create an instance of Aspect from a JSON string
aspect_instance = Aspect.from_json(json)
# print the JSON string representation of the object
print(Aspect.to_json())

# convert the object into a dict
aspect_dict = aspect_instance.to_dict()
# create an instance of Aspect from a dict
aspect_from_dict = Aspect.from_dict(aspect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


