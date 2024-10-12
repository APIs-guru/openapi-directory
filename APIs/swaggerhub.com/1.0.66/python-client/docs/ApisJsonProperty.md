# ApisJsonProperty

An API property. Has a `type` and either `url` or `value`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**url** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.apis_json_property import ApisJsonProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ApisJsonProperty from a JSON string
apis_json_property_instance = ApisJsonProperty.from_json(json)
# print the JSON string representation of the object
print(ApisJsonProperty.to_json())

# convert the object into a dict
apis_json_property_dict = apis_json_property_instance.to_dict()
# create an instance of ApisJsonProperty from a dict
apis_json_property_from_dict = ApisJsonProperty.from_dict(apis_json_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


