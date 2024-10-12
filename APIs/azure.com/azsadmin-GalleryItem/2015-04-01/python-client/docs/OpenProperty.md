# OpenProperty

Open type used to define dynamic properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, object]** | Dictionary of dynamic properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.open_property import OpenProperty

# TODO update the JSON string below
json = "{}"
# create an instance of OpenProperty from a JSON string
open_property_instance = OpenProperty.from_json(json)
# print the JSON string representation of the object
print(OpenProperty.to_json())

# convert the object into a dict
open_property_dict = open_property_instance.to_dict()
# create an instance of OpenProperty from a dict
open_property_from_dict = OpenProperty.from_dict(open_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


