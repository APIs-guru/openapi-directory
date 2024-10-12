# SimpleApplicationPropertyBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the application property. | [optional] 
**value** | **str** | The new value. | [optional] 

## Example

```python
from openapi_client.models.simple_application_property_bean import SimpleApplicationPropertyBean

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleApplicationPropertyBean from a JSON string
simple_application_property_bean_instance = SimpleApplicationPropertyBean.from_json(json)
# print the JSON string representation of the object
print(SimpleApplicationPropertyBean.to_json())

# convert the object into a dict
simple_application_property_bean_dict = simple_application_property_bean_instance.to_dict()
# create an instance of SimpleApplicationPropertyBean from a dict
simple_application_property_bean_from_dict = SimpleApplicationPropertyBean.from_dict(simple_application_property_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


